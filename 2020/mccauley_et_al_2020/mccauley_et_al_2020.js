var model_url = 'bsp-lp-mccauley-et-al-2020/mccauley_et_al_2020_03.zip';

//var default_parameters = {'FUNCTIONS':['locnmda()', 'change_taurec()'], 'tstop' : 200, 'v_init': -70,'weightNMDA':  0.0009, 'taurec': 10};
var default_parameters = {"h": {'FUNCTIONS': ['locnmda()', 'change_taurec()']}, 'tstop' : 200, 'v_init': -70,'weightNMDA':  0.0009, 'taurec':10};
//var default_parameters = {'tstop' : 200, 'v_init': -70,'weightNMDA':  0.0009, 'taurec':10};


var recorded_vectors = {'TIME': 't', 'v(0.5)' : 'v'};

var fadeinval = 1200;
var fadeoutval = 600;


$(document).ready(function () {

	var wNMDA = document.getElementById("wNMDA");
	var taur = document.getElementById("taur");

	var plotlyChart_01 = document.getElementById("plotlyChart_01");
	
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


	wNMDA.disabled = true;
	taur.disabled = true;

	wNMDA.value = "0.0009";
	taur.value = "10";

	Plotly.newPlot(plotlyChart_01, [{x:[], y:[]}], layout_01, {displayModeBar: false}, {responsive: true});
	
	resize_plots();

	$(window).resize(function(){
		resize_plots();
	});

	$("#wNMDA,#taur").keyup(validate_parameters)

	$("#wNMDA,#taur").on("change", validate_parameters);

	$('#run').click(function() {
		$('#error-msg').animate({opacity: 0}, 0);
		$('#plots').animate({opacity: 0}, fadeoutval);
		$('#loader').animate({opacity: 1}, fadeinval);
		title = "<h5>EPSPs</h5>";
		var xmin = 0;
		var xmax = 200;
		layout_01['xaxis']['autorange'] = false;
		layout_01['xaxis']['range'] = [xmin, xmax];
		var ws = new WebSocket('wss://blue-naas-svc.humanbrainproject.eu/ws');
		ws.onerror = function(evt){ws_on_error(evt)}
		ws.onopen = function(){ws_on_open(ws, default_parameters, wNMDA, taur)}
		ws.onmessage = function(evt){ws_on_message(ws, evt, layout_01,  title)}
		
	});    



	$('#switch').on("change", function() {
		if ($('#switch')[0].checked) { 
			wNMDA.disabled = false;
			taur.disabled = false;
		} else {
			wNMDA.disabled = true;
			taur.disabled = true;
			$("#message").hide();
			wNMDA.value = "0.0009";
			taur.value = "10";
		}
	});


	$("#run").click();
});


// open websocket connection
function ws_on_open(ws, params, wNMDA, taur){
	ws.send(JSON.stringify({'cmd': 'set_url', 'data': model_url}));
	params["weightNMDA"] = parseFloat(wNMDA.value)
	params["taurec"] = parseFloat(taur.value)
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
function ws_on_message(ws, evt, layout_01, title) {
	// handle received message

	var flag = $('#switch-lines')[0].checked;

	var received_msg = JSON.parse(evt.data);
	console.log("received_msg")
	console.log(received_msg)
	var time = received_msg["data"]["TIME"];
	var v = received_msg["data"]["v(0.5)"];
	var val_wNMDA=$('#wNMDA').val();
	var val_taur=$('#taur').val();

	// read current data in plot
	var datap1 = plotlyChart_01.data;
	
	// create empty final data vector
	var datafinalp1 = [];
	

	// if plot already present, copy plot data on final vectors
	if (datap1 && !(datap1[0].x.length == 0)){
		datafinalp1 = datap1;
	}

	if (!flag == false){
		datafinalp1.push({x:time, y:v, name:'taur: '+val_taur+' - wNMDA: '+val_wNMDA});
        console.log(datafinalp1)
		Plotly.react(plotlyChart_01, datafinalp1, layout_01);
	} else {
        Plotly.react(plotlyChart_01, [{x:time, y:v,
            name:'taur: '+val_taur+' - wNMDA: '+val_wNMDA}], layout_01);
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
	
	var layout_01 = plotlyChart_01.layout;
	
	var data_01 = plotlyChart_01.data;
	
	layout_01["width"] = plot_width; 
	
	Plotly.react(plotlyChart_01, data_01, layout_01);
	
}

function validate_parameters(){

	var val_wNMDA=$('#wNMDA').val();
	var val_taur=$('#taur').val();
	if(val_wNMDA<0 || val_wNMDA>0.009 || val_taur<0 || val_taur>50 || val_wNMDA=='' || val_taur==''){
		$("#message").show();
		$("#run").attr("disabled", true);
		$("#wNMDA").css("background-color","#f8f8fa");
		$("#taur").css("background-color","#f8f8fa");
	}
	else{
		$("#message").hide();
		$("#run").attr("disabled", false);
		$("#wNMDA").css("background-color","#fff");
		$("#taur").css("background-color","#fff");
	}
}
