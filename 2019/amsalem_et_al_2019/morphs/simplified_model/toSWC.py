# read reduced morph file and create SWC file from it

from neuron import h, gui
import math
import numpy as np
import pdb

SOMA_IX = 0
APIC_IX = 1
ID_SOMA = 1
ID_AXON = 2
ID_DEND = 3
ID_APIC = 4
SEC_LIST_IX = 0
L_IX = 1
D_IX = 2


PARENT_ID = 2
DELIM = ','
reduced_morph_file = "cell1_morph.txt"
new_swc_file = "cell1_reduced.SWC"
template_name = "templateM" #assumes the template file is template_name.hoc

CREATE_NEW_MODEL = 1





# Gets as an input reduced morphfile and generate a SEC with the same dimensions
def morph_to_swc(morph_file,new_morph_file):
	f1 = open(morph_file)
	line = f1.readline()
	swc_rows_list = []
	soma_table = []
	apic_table = []
	basal_table = []
	for line in f1:

		line_L = line.split(DELIM)
		L_D = (0,float(line_L[L_IX]),float(line_L[D_IX]))


		if line_L[SEC_LIST_IX] == "somatic":
			soma_table.append(L_D)
		elif line_L[SEC_LIST_IX] == 'apical':
			apic_table.append(L_D)
		else:
			basal_table.append(L_D)



	swc_list = []

	# SOMA:
	swc_list.append([1,ID_SOMA,-1*soma_table[0][L_IX],0,0,soma_table[0][D_IX]/2,-1])
	swc_list.append([2,ID_SOMA,0,0,0,soma_table[0][D_IX]/2,1])
	row_ix = 3
	if apic_table:

		#APIC: 
		swc_list.append([3,ID_APIC,0,0,0,apic_table[0][D_IX]/2,PARENT_ID])
		swc_list.append([4,ID_APIC,0,apic_table[0][L_IX]/2,0,apic_table[0][D_IX]/2,3])
		swc_list.append([5,ID_APIC,0,apic_table[0][L_IX],0,apic_table[0][D_IX]/2,4])
		row_ix = 6


	# BASAL 

	for basal_dend in range(len(basal_table)):
		deg_rad = math.pi/(len(basal_table)-1)*basal_dend
		tan = math.tan(deg_rad)

		l = basal_table[basal_dend][L_IX]

		x = math.sqrt(l**2/(1+tan**2))
		if deg_rad>math.pi/2 :
			x=x*-1
		y = abs(x*tan)*-1
		
		swc_list.append([row_ix,ID_DEND,0,0,0,basal_table[basal_dend][D_IX]/2,PARENT_ID])
		swc_list.append([row_ix+1,ID_DEND,x/2,y/2,0,basal_table[basal_dend][D_IX]/2,row_ix])
		swc_list.append([row_ix+2,ID_DEND,x,y,0,basal_table[basal_dend][D_IX]/2,row_ix+1])
		row_ix+=3


	np.savetxt(new_morph_file,np.array(swc_list),fmt= "%d %d %3.8f %3.8f %3.8f %3.8f %d")

# Use to create a model based on the SWC file
def create_morph(swc_file,template):
	h.load_file("import3d.hoc")
	h.load_file("nrngui.hoc")
	h("objref cell, tobj")
	h.load_file(template+".hoc")
	h.execute("cell = new "+template+"()") #replace
	nl = h.Import3d_SWC_read()
	nl.quiet = 1
	nl.input(swc_file)
	imprt = h.Import3d_GUI(nl,0)
	imprt.instantiate(h.cell)	
	return h.cell


morph_to_swc(reduced_morph_file,new_swc_file)
if CREATE_NEW_MODEL:
	cell = create_morph(new_swc_file,template_name)


