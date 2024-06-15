var Ac = 0;
var AcMb = 100;
var AcM = AcMb + Bc;
var nAc = 1;
var Bc = 0;
var nBc = 1;
load();

function FAc() {
	AcM = AcMb + Bc;
	if(Ac < AcM){
		Ac = Ac + 1;
	}
	update()
}

function FBc() {
	if(Ac >= AcM){
		Ac = 0;
		Bc = Bc + 1;
		AcM = AcMb + Bc;
	}
	update()
}

function update() {
	document.querySelector("#Ac").value = Ac;
	document.querySelector("#Bc").value = Bc;
	document.querySelector("#Ac").innerHTML = "Ac "+ Ac +" / " + AcM;
	document.querySelector("#Bc").innerHTML = "Bc "+ Bc;

	document.querySelector("#nAc").innerHTML = "현재 추가 Ac 는 "+ nAc +"입니다.";
	document.querySelector("#nBc").innerHTML = "현재 추가 Bc 는 "+ nBc +"입니다.";
}

function save(){
	localStorage.setItem("Ac",Ac);
	localStorage.setItem("AcM",AcM);
	localStorage.setItem("AcMb",AcMb);
	localStorage.setItem("Bc",Bc);
}

function load(){
	Ac = localStorage.getItem("Ac",Ac);
	AcM = localStorage.getItem("AcM",AcM);
	AcMb = localStorage.getItem("AcMb",AcMb);
	Bc = localStorage.getItem("Bc",Bc);
	Ac = parseInt(Ac);
	AcM = parseInt(AcM);
	AcMb = parseInt(AcMb);
	Bc = parseInt(Bc);
	update();
}

function hardreset(){
	Ac = 0;
	AcMb = 100;
	AcM = AcMb + Bc;
	nAc = 1;

	Bc = 0;
	nBc = 1;
	update();
}