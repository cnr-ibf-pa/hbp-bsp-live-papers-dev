#!/usr/bin/env python

import sys,os
import pdb
import sys
import numpy as np
try:
    sys.path.append("/home/ls/users/guy.eyal/Projects/Noa/paper")
except:
    pass

def Createtxt(c):
    global plot_voltages
    if PARALLEL_ENV:
        PARALELL_COMMAND = 'qsub'
        outfile = 'Runs/'+str(c)+'.txt'
        errfile = 'Runs/'+str(c)+'err.txt'
        s = " ".join([PARALELL_COMMAND,'-o',outfile,'-e',errfile])
        plot_voltages = False

    else:
        s = 'python'
    s += " model_runner.py " +  orig_morphology_file + ' ' + orig_model_file  + ' ' +  reduced_model_file  + \
       ' ' +  str(frequency)  + ' ' +  str(manual_total_nsegs)  + ' '  +  \
        str(plot_voltages) + ' '+ str(save_traces)+' ' + create_type


    for k in kwargs:
        s+=add_vars_for_kwargs(k)
   

    return s



def add_vars_for_kwargs(key):
	try:
		s = " "+str(key)+"="+str(kwargs[key])
	except:
		s = ""
	return s


FREQ_LIST = [0]
# NUM_OF_STIMULI = 1.0
# FREQ_LIST = [0,20,100,200,300]
NUM_OF_STIMULI = 50.0

### Test 1 passive neuron
PARALLEL_ENV = 1
Path = 'models/L4_LBC_cNAC187_5_full/'
orig_morphology_file = Path + "C230998C-I2_cor_-_Scale_x1.000_y0.950_z1.000_-_Clone_0.asc"
orig_model_file = Path + "cNAC187_L4_LBC_8e834c24cb.hoc"
reduced_model_file = Path + "model.hoc"
manual_total_nsegs = -1
synapse_file = Path + "origRandomSynapses-10000"
plot_voltages = False
save_traces = True
create_type  = 'bbpnew'

kwargs = {}



c=0
kwargs['i_freq'] = 10
kwargs['tau_d_GABAA'] = 8.34890815178
kwargs['i_weight'] = 0.000841227035827
kwargs['tau_d_AMPA'] = 1.73572658473
kwargs['e_weight'] = 0.000713604222834
kwargs['num_syns'] = 5000
kwargs['voltage_traces_ix'] = '_50'
kwargs['celsius'] = 34

for e_freq in np.arange(1,3,0.02):


    kwargs['e_freq'] = e_freq
    for frequency in FREQ_LIST:

        s = Createtxt(c)
        # print s
        # os.system(s)
        c+=1
        print c


Path = 'models/L4_SS_cADpyr230_1_full/'
orig_morphology_file = Path + "dend-C050800E2_cor_axon-C120398A-P2_-_Scale_x1.000_y1.050_z1.000_-_Clone_71.asc"
orig_model_file = Path + "cADpyr230_L4_SS_9e49de205b.hoc"
reduced_model_file = Path + "model.hoc"

create_type  = 'bbpnew'

kwargs = {}


kwargs['i_freq'] = 10
kwargs['tau_d_GABAA'] = 7.82193132285
kwargs['i_weight'] = 0.000842147609471
kwargs['tau_d_AMPA'] = 1.74459077373
kwargs['e_weight'] = 0.000756381449243
kwargs['num_syns'] = 5000
kwargs['voltage_traces_ix'] = '_50'
kwargs['celsius'] = 34
MIN_FREQ = 1
MAX_FREQ = 3

for e_freq in np.arange(1.01,4.02,0.02):
    kwargs['e_freq'] = e_freq
    for frequency in FREQ_LIST:

        s = Createtxt(c)
        # print s
        # os.system(s)
        c+=1
        print c


Path = 'models/L5_MC_bAC217_2_full/'
orig_morphology_file = Path + "C210301C1_cor.asc"
orig_model_file = Path + "bAC217_L5_MC_7eeb7cff0f.hoc"
reduced_model_file = Path + "model.hoc"

create_type  = 'bbpnew'

kwargs = {}


kwargs['i_freq'] = 10
kwargs['tau_d_GABAA'] = 8.34260501271
kwargs['i_weight'] = 0.00083965124836
kwargs['tau_d_AMPA'] = 1.74077901974
kwargs['e_weight'] = 0.00011534623134
kwargs['num_syns'] = 5000
kwargs['voltage_traces_ix'] = '_50'
kwargs['celsius'] = 34


# for e_freq in np.arange(7,19.01,0.1):
for e_freq in np.arange(19,25.01,0.1):
    kwargs['e_freq'] = e_freq
    for frequency in FREQ_LIST:

        #s = Createtxt(c)
        #print s
        #os.system(s)
        c+=1
        print c

Path = 'models/L4_DBC_cNAC187_1_full/'
orig_morphology_file = Path + "C140600C-I1_-_Clone_2.asc"
orig_model_file = Path + "cNAC187_L4_DBC_23ffe29c8b.hoc"
reduced_model_file = Path + "model.hoc"

create_type  = 'bbpnew'

kwargs = {}
manual_total_nsegs = 11

kwargs['i_freq'] = 10
kwargs['tau_d_GABAA'] = 8.32325145933
kwargs['i_weight'] = 0.000834812854451
kwargs['tau_d_AMPA'] = 1.73125066061
kwargs['e_weight'] = 0.000406389921244
kwargs['num_syns'] = 2000
kwargs['voltage_traces_ix'] = '_50' 
kwargs['celsius'] = 34



#for e_freq in np.arange(2,4.01,0.02):
for e_freq in np.arange(0.1,0.11,0.2):


    kwargs['e_freq'] = e_freq
    for frequency in FREQ_LIST:

        s = Createtxt(c)
        print s
        os.system(s)
        c+=1
        print c


Path = 'models/L6_TPC_L1_cADpyr231_5_full/'
orig_morphology_file = Path + "dend-tkb070125a3_ch1_cc2_b_hw_60x_1_axon-tkb060223b3_ch1_cc2_o_ps_60x_1_-_Clone_5.asc"
orig_model_file = Path + "cADpyr231_L6_TPC_L1_44f2206f70.hoc"
reduced_model_file = Path + "model.hoc"

create_type  = 'bbpnew'

kwargs = {}
manual_total_nsegs = -1

kwargs['i_freq'] = 10
kwargs['tau_d_GABAA'] = 7.64546419721
kwargs['i_weight'] = 0.000876995640627
kwargs['tau_d_AMPA'] = 1.73774640059
kwargs['e_weight'] = 0.00078538944389
kwargs['num_syns'] = 10000
kwargs['voltage_traces_ix'] = '_50' 
kwargs['celsius'] = 34


# for e_freq in np.arange(1,3,0.01):
for e_freq in np.arange(3,4,0.01):

    kwargs['e_freq'] = e_freq
    for frequency in FREQ_LIST:

        #s = Createtxt(c)
        #print s
	#os.system(s)
        c+=1
        print c



Path = 'models/L4_LBC_amsalem/'
orig_morphology_file = Path + "C250500A-I4.asc"
orig_model_file = Path + "C250500AI4_new_new_fit.hoc"
reduced_model_file = Path + "model.hoc"

create_type  = 'bbp'

kwargs = {}


kwargs['i_freq'] = 10
kwargs['tau_r_GABAA'] = 1
kwargs['tau_d_GABAA'] = 8
kwargs['i_weight'] = 0.000125
kwargs['tau_d_AMPA'] = 2
kwargs['tau_r_AMPA'] = 0.3
kwargs['e_weight'] = 0.00069
# kwargs['num_syns'] = 5000
kwargs['num_syns'] = 1250
kwargs['NMDA_ratio'] = 0.

kwargs['voltage_traces_ix'] = '_amsalem_50'
kwargs['celsius'] = 34

for e_freq in np.arange(1,4,0.02):
 
    kwargs['e_freq'] = e_freq
    for frequency in FREQ_LIST:

        s = Createtxt(c)
        # print s
        # os.system(s)
        c+=1
        print c
