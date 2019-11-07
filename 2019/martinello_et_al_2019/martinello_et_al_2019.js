var model_url = 'bsp-lp-martinello-et-al-2019/neuronservice_eg_llb_dev_changed_mod_path_mod.zip';

var default_parameters_train = {'soma' : {'gbar_kmb':  0.005, 'gcanbar_can': 0.6}, 
'tstop' : 600, 'v_init': -80};

var default_parameters_ap = {'soma' : {'gbar_kmb':  0.005, 'gcanbar_can': 0.6}, 
'tstop' : 600, 'v_init': -80};

var recorded_vectors = {'TIME': 't', 'v(0.5)' : 'v', 'cai(0.5)' : 'cai'};

var fadeinval = 1200;
var fadeoutval = 600;

for (var i = 0; i < 20; i++) {                                             
	var stim_item = "stim["+i+"]"                                              
	default_parameters_train[stim_item] = {"amp" : 0.03}                      
} 

default_parameters_ap["stim[0]"] = {"amp" : 0.03}

for (var i = 1; i < 20; i++) {
	var stim_item = "stim["+i+"]"
	default_parameters_ap[stim_item] = {"amp" : 0.0}
}

$(document).ready(function () {

	var gca = document.getElementById("gca");
	var gkm = document.getElementById("gkm");

	var plotlyChart_01 = document.getElementById("plotlyChart_01");
	var plotlyChart_02 = document.getElementById("plotlyChart_02");

	var plotdiv = document.getElementById("plots");

	var margin = {
		l: 60,
		r: 25,
		b: 60,
		t: 35,
		pad: 15
	}

	var layout_01= {
		title: 'Voltage',
		xaxis:{title:'t (ms)'}, 
		yaxis:{title:'V (mV)'},
		legend: { "orientation":"h", y:-0.2 },
		showlegend:true,
		margin: margin,
	};

	var layout_02= {
		title: 'Cai',
		xaxis:{title:'t (ms)'}, 
		yaxis:{title:'Cai (mM)'},
		legend: { "orientation":"h", y:-0.2 },
		showlegend:true,
		margin: margin,
	};

	$('#switch')[0].checked = false;
	$('#switch_s_t')[0].checked=false;
	$('#switch-lines')[0].checked=false;

	gca.disabled = true;
	gkm.disabled = true;

	gca.value = "0.6";
	gkm.value = "0.005";

	Plotly.newPlot(plotlyChart_01, [{x:[], y:[]}], layout_01, {displayModeBar: false}, {responsive: true});
	Plotly.newPlot(plotlyChart_02, [{x:[], y:[]}], layout_02, {displayModeBar: false}, {responsive: true});

	resize_plots();

	$(window).resize(function(){
		resize_plots();
	});

	$("#gca,#gkm").keyup(validate_parameters)

	$("#gca,#gkm").on("change", validate_parameters);

	$('#run').click(function() {
		if ($('#switch_s_t').is(':checked')) {
			$('#error-msg').animate({opacity: 0}, 0);
			$('#plots').animate({opacity: 0}, fadeoutval);
			$('#loader').animate({opacity: 1}, fadeinval);
			title = "<h5>50hz train stimulus</h5>";
			var xmin = 50;
			var xmax = 550;
			layout_01['xaxis']['autorange'] = false;
			layout_01['xaxis']['range'] = [xmin, xmax];
			var ws = new WebSocket('wss://blue-naas-svc.humanbrainproject.eu/ws');
			ws.onerror = function(evt){ws_on_error(evt)}
			ws.onopen = function(){ws_on_open(ws, default_parameters_train, gkm, gca)}
			ws.onmessage = function(evt){ws_on_message(ws, evt, layout_01, layout_02, title)}
		}
		else {
			$('#error-msg').animate({opacity: 0}, 0);
			$('#plots').animate({opacity: 0}, fadeoutval);
			$('#loader').animate({opacity: 1}, fadeinval);
			title = "<h5>Single AP stimulus</h5>";
			var xmin=99;
			var xmax=106;
			layout_01['xaxis']['autorange'] = false;
			layout_01['xaxis']['range'] = [xmin, xmax];
			var ws = new WebSocket('wss://blue-naas-svc.humanbrainproject.eu/ws');
			ws.onerror = function(evt){ws_on_error(evt)}
			ws.onopen = function(){ws_on_open(ws, default_parameters_ap, gkm, gca)}
			ws.onmessage = function(evt){ws_on_message(ws, evt, layout_01, layout_02, title)}
		}
	});    

	$('#switch').on("change", function() {
		if ($('#switch')[0].checked) { 
			gca.disabled = false;
			gkm.disabled = false;
		} else {
			gca.disabled = true;
			gkm.disabled = true;
			$("#message").hide();
			gca.value = "0.6";
			gkm.value = "0.005";
		}
	});

	$("#run").click();
});


// open websocket connection
function ws_on_open(ws, params, gkm, gca){
	ws.send(JSON.stringify({'cmd': 'set_url', 'data': model_url}));
	params["soma"]["gbar_kmb"] = parseFloat(gkm.value)
	params["soma"]["gcanbar_can"] = parseFloat(gca.value)
	ws.send(JSON.stringify({"cmd": 'set_params', "data": params}))
	ws.send(JSON.stringify({'cmd': 'run_simulation', 'data': recorded_vectors}))
}

// handle errors event
function ws_on_error(){
	$('#plots').animate({opacity: 0}, fadeoutval);
	$('#loader').animate({opacity: 0}, fadeoutval);
	const wait = time => new Promise(
		res => setTimeout(() => res(), time)
	);
	wait(fadeinval + fadeoutval)
		.then(() => $('#error-msg').animate({opacity: 1}, fadeinval));

}
// open websocket connection
function ws_on_message(ws, evt, layout_01, layout_02, title) {
	// handle received message
	var received_msg = JSON.parse(evt.data);
	var time = received_msg["data"]["TIME"];
	var v = received_msg["data"]["v(0.5)"];
	var cai = received_msg["data"]["cai(0.5)"];
	var val_gca=$('#gca').val();
	var val_gkm=$('#gkm').val();

	// read current data in plot
	var datap1 = plotlyChart_01.data;
	var datap2 = plotlyChart_02.data;

	// create empty final data vector
	var datafinalp1 = [];
	var datafinalp2 = [];

	// if plot already present, copy plot data on final vectors
	if (datap1 && !(datap1[0].x.length == 0)){
		datafinalp1 = datap1;
		datafinalp2 = datap2;
	}

	var flag = $('#switch-lines')[0].checked;

	// if the "Keep line" checkbox is selected
	if (!flag == false){
		datafinalp1.push({x:time, y:v, name:'gkm_'+val_gkm+'_gca_'+val_gca});
		datafinalp2.push({x:time, y:cai,name:'gkm_'+val_gkm+'_gca_'+val_gca}); 
		Plotly.react(plotlyChart_01, datafinalp1, layout_01);
		Plotly.react(plotlyChart_02, datafinalp2, layout_02);
	} else {
		Plotly.react(plotlyChart_01, [{x:time, y:v,name:'gkm_'+val_gkm+'_gca_'+val_gca}], layout_01);
		Plotly.react(plotlyChart_02, [{x:time, y:cai,name:'gkm_'+val_gkm+'_gca_'+val_gca}], layout_02);
	}
	$('#plot-title')[0].innerHTML = title;
	$('#error-msg').animate({opacity: 0}, 0);
	$('#plots').animate({opacity: 1}, fadeinval);
	$('#loader').animate({opacity: 0}, fadeoutval);
	ws.close();
}

function resize_plots(){
	var plotdiv = document.getElementById("collapsetitle");
	var plot_width = Math.trunc((plotdiv.offsetWidth-200)/2);

	var plotlyChart_01 = document.getElementById("plotlyChart_01");
	var plotlyChart_02 = document.getElementById("plotlyChart_02");

	var layout_01 = plotlyChart_01.layout;
	var layout_02= plotlyChart_02.layout;

	var data_01 = plotlyChart_01.data;
	var data_02= plotlyChart_02.data;

	layout_01["width"] = plot_width; 
	layout_02["width"] = plot_width;

	Plotly.react(plotlyChart_01, data_01, layout_01);
	Plotly.react(plotlyChart_02, data_02, layout_02);
}

function validate_parameters(){

	var val_gca=$('#gca').val();
	var val_gkm=$('#gkm').val();
	if(val_gca<0 || val_gca>5 || val_gkm<0 || val_gkm>5 || val_gca=='' || val_gkm==''){
		$("#message").show();
		$("#run").attr("disabled", true);
		$("#gca").css("background-color","#f8f8fa");
		$("#gkm").css("background-color","#f8f8fa");
	}
	else{
		$("#message").hide();
		$("#run").attr("disabled", false);
		$("#gca").css("background-color","#fff");
		$("#gkm").css("background-color","#fff");
	}
}
