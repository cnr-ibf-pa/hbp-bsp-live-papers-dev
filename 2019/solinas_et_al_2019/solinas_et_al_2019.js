var model_url = 'bluenaas_models/solinas_test_01.zip';

var default_parameters = {'panel' : {'nBPAP':  1, 'nstim': 70, 
    'FUNCTIONS':['set_pulse()']}, 'tstop' : 250}


var recorded_vectors = {
       'TIME' : 't',
       'soma(0.5)' : 'v',
       'branch[38](0.1)' : 'v_vec_base',
       'spine1_head[0]_v' : 'v_vec_spine1_matrix[0]',
       'spine1_head[1]_v' : 'v_vec_spine1_matrix[1]',
       'spine1_head[2]_v' : 'v_vec_spine1_matrix[2]',
       'spine1_head[3]_v' : 'v_vec_spine1_matrix[3]',
       'spine1_head[4]_v' : 'v_vec_spine1_matrix[4]',
       'spine1_head[5]_v' : 'v_vec_spine1_matrix[5]',
       'spine1_head[6]_v' : 'v_vec_spine1_matrix[6]',
       'spine1_head[7]_v' : 'v_vec_spine1_matrix[7]',
       'spine1_head[8]_v' : 'v_vec_spine1_matrix[8]',
       'spine1_head[9]_v' : 'v_vec_spine1_matrix[9]',
       'spine1_head[10]_v' : 'v_vec_spine1_matrix[10]',
       'spine2_head[0]_v' : 'v_vec_spine2_matrix[0]',
       'spine2_head[1]_v' : 'v_vec_spine2_matrix[1]',
       'spine2_head[2]_v' : 'v_vec_spine2_matrix[2]',
       'spine2_head[3]_v' : 'v_vec_spine2_matrix[3]',
       'spine2_head[4]_v' : 'v_vec_spine2_matrix[4]',
       'spine2_head[5]_v' : 'v_vec_spine2_matrix[5]',
       'theta1' : 'theta1',
       'theta2' : 'theta2',
       'theta3' : 'theta3',
       'spine1_head[0]_cai' : 'cai_vec_spine1_matrix[0]',
       'spine1_head[1]_cai' : 'cai_vec_spine1_matrix[1]',
       'spine1_head[2]_cai' : 'cai_vec_spine1_matrix[2]',
       'spine1_head[3]_cai' : 'cai_vec_spine1_matrix[3]',
       'spine1_head[4]_cai' : 'cai_vec_spine1_matrix[4]',
       'spine1_head[5]_cai' : 'cai_vec_spine1_matrix[5]',
       'spine1_head[6]_cai' : 'cai_vec_spine1_matrix[6]',
       'spine1_head[7]_cai' : 'cai_vec_spine1_matrix[7]',
       'spine1_head[8]_cai' : 'cai_vec_spine1_matrix[8]',
       'spine1_head[9]_cai' : 'cai_vec_spine1_matrix[9]',
       'spine1_head[10]_cai' : 'cai_vec_spine1_matrix[10]',
       'spine2_head[0]_cai' : 'cai_vec_spine2_matrix[0]',
       'spine2_head[1]_cai' : 'cai_vec_spine2_matrix[1]',
       'spine2_head[2]_cai' : 'cai_vec_spine2_matrix[2]',
       'spine2_head[3]_cai' : 'cai_vec_spine2_matrix[3]',
       'spine2_head[4]_cai' : 'cai_vec_spine2_matrix[4]',
       'spine2_head[5]_cai' : 'cai_vec_spine2_matrix[5]'
}

var fadeinval = 1200;
var fadeoutval = 600;


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
			ws.onopen = function(){ws_on_open(ws, default_parameters)}
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
			ws.onopen = function(){ws_on_open(ws, default_parameters)}
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
    console.log("entered in on open");
	ws.send(JSON.stringify({'cmd': 'set_url', 'data': model_url}));
	params["soma"]["gbar_kmb"] = parseFloat(gkm.value)
	params["soma"]["gcanbar_can"] = parseFloat(gca.value)
	ws.send(JSON.stringify({"cmd": 'set_params', "data": params}))
	ws.send(JSON.stringify({'cmd': 'run_simulation', 'data': recorded_vectors}))
}

// handle errors event
function ws_on_error(evt){
    console.log("entered in on error");
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
