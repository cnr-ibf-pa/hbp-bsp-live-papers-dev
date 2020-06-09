var neo_url = "https://neo-viewer.brainsimulation.eu/";
var down_sample_factor = 2;
var file_plot_dict = {
    "plot_chart_02":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/ctrl-c1/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_ctrl-c1__CTRL_c1.txt",
    "plot_chart_03":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/ctrl-c2/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_ctrl-c2__CTRL_c2.txt",
	"plot_chart_04":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/ctrl-c3/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_ctrl-c3__CTRL_c3.txt",
	"plot_chart_05":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/ctrl-c4/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_ctrl-c4__CTRL_c4.txt",
	"plot_chart_06":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/ctrl-c5/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_ctrl-c5__CTRL_c5.txt",
	"plot_chart_07":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/ctrl-c6/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_ctrl-c6__CTRL_c6.txt",
	"plot_chart_08":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/ctrl-c7/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_ctrl-c7__CTRL_c7.txt",
	"plot_chart_09":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/ctrl-c8/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_ctrl-c8__CTRL_c8.txt",
	"plot_chart_10":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/ctrl-c9/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_ctrl-c9__CTRL_c9.txt",
	"plot_chart_11":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/ctrl-c10/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_ctrl-c10__CTRL_c10.txt",
	"plot_chart_12":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/ctrl-c11/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_ctrl-c11__CTRL_c11.txt",
	"plot_chart_13":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/ctrl-c12/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_ctrl-c12__CTRL_c12.txt",
	"plot_chart_14":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-geph-NLSC/mIPSCs-scFv-geph-NLSC/mIPSCs-geph-NLSC/ctrl-c13/hbp-00713_sIPSCs-scFvGephnlsc_sIPSCs-gephnIsc_ctrl-c13__CTRL_c13.txt",
	"plot_chart_15":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-geph-NLSC/mIPSCs-scFv-geph-NLSC/mIPSCs-geph-NLSC/ctrl-c14/hbp-00713_sIPSCs-scFvGephnlsc_sIPSCs-gephnIsc_ctrl-c14__CTRL_c14.txt",
	"plot_chart_16":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-geph-NLSC/mIPSCs-scFv-geph-NLSC/mIPSCs-geph-NLSC/ctrl-c15/hbp-00713_sIPSCs-scFvGephnlsc_sIPSCs-gephnIsc_ctrl-c15__CTRL_c15.txt",
	"plot_chart_17":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-geph-NLSC/mIPSCs-scFv-geph-NLSC/mIPSCs-geph-NLSC/ctrl-c16/hbp-00713_sIPSCs-scFvGephnlsc_sIPSCs-gephnIsc_ctrl-c16__CTRL_c16.txt",
	"plot_chart_18":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-geph-NLSC/mIPSCs-scFv-geph-NLSC/mIPSCs-geph-NLSC/ctrl-c17/hbp-00713_sIPSCs-scFvGephnlsc_sIPSCs-gephnIsc_ctrl-c17__CTRL_c17.txt",
	"plot_chart_19":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/gephcyto-c1/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_gephcyto-c1__GEPH-CYTO_c1.txt",
    "plot_chart_20":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/gephcyto-c2/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_gephcyto-c2__GEPH-CYTO_c2.txt",
	"plot_chart_21":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/gephcyto-c3/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_gephcyto-c3__GEPH-CYTO_c3.txt",
	"plot_chart_22":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/gephcyto-c4/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_gephcyto-c4__GEPH-CYTO_c4.txt",
	"plot_chart_23":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/gephcyto-c5/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_gephcyto-c5__GEPH-CYTO_c5.txt",
	"plot_chart_24":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/gephcyto-c6/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_gephcyto-c6__GEPH-CYTO_c6.txt",
	"plot_chart_25":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/gephcyto-c8/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_gephcyto-c8__GEPH-CYTO_c8.txt",
	"plot_chart_26":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/gephcyto-c9/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_gephcyto-c9__GEPH-CYTO_c9.txt",
	"plot_chart_27":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/gephcyto-c10/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_gephcyto-c10__GEPH-CYTO_c10.txt",
	"plot_chart_28":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/gephcyto-c11/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_gephcyto-c11__GEPH-CYTO_c11.txt",
	"plot_chart_29":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/gephcyto-c12/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_gephcyto-c12__GEPH-CYTO_c12.txt",
	"plot_chart_30":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/gephcyto-c13/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_gephcyto-c13__GEPH-CYTO_c13.txt",
	"plot_chart_31":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/gephcyto-c14/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_gephcyto-c14__GEPH-CYTO_c14.txt",
	"plot_chart_32":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/gephcyto-c15/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_gephcyto-c15__GEPH-CYTO_c15.txt",
	"plot_chart_33":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/gephcyto-c16/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_gephcyto-c16__GEPH-CYTO_c16.txt",
	"plot_chart_34":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-gephcyto/mIPSCs-scFv-gephcyto/mIPSCs-gephcyto/gephcyto-c17/hbp-00713_sIPSCs-scFvGephcyto_sIPSCs-gephcyto_gephcyto-c17__GEPH-CYTO_c17.txt",
	"plot_chart_35":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-geph-NLSC/mIPSCs-scFv-geph-NLSC/mIPSCs-geph-NLSC/nlsc-c18/hbp-00713_sIPSCs-scFvGephnlsc_sIPSCs-gephnIsc_nlsc-c18__NLSC_c18.txt",
	"plot_chart_36":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-geph-NLSC/mIPSCs-scFv-geph-NLSC/mIPSCs-geph-NLSC/nlsc-c19/hbp-00713_sIPSCs-scFvGephnlsc_sIPSCs-gephnIsc_nlsc-c19__NLSC_c19.txt",
	"plot_chart_37":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-geph-NLSC/mIPSCs-scFv-geph-NLSC/mIPSCs-geph-NLSC/nlsc-c20/hbp-00713_sIPSCs-scFvGephnlsc_sIPSCs-gephnIsc_nlsc-c20__NLSC_c20.txt",
	"plot_chart_38":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-geph-NLSC/mIPSCs-scFv-geph-NLSC/mIPSCs-geph-NLSC/nlsc-c23/hbp-00713_sIPSCs-scFvGephnlsc_sIPSCs-gephnIsc_nlsc-c23__NLSC_c23.txt",
	"plot_chart_39":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-geph-NLSC/mIPSCs-scFv-geph-NLSC/mIPSCs-geph-NLSC/nlsc-c24/hbp-00713_sIPSCs-scFvGephnlsc_sIPSCs-gephnIsc_nlsc-c24__NLSC_c24.txt",
	"plot_chart_40":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-geph-NLSC/mIPSCs-scFv-geph-NLSC/mIPSCs-geph-NLSC/nlsc-c25/hbp-00713_sIPSCs-scFvGephnlsc_sIPSCs-gephnIsc_nlsc-c25__NLSC_c25.txt",
	"plot_chart_41":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-geph-NLSC/mIPSCs-scFv-geph-NLSC/mIPSCs-geph-NLSC/nlsc-c26/hbp-00713_sIPSCs-scFvGephnlsc_sIPSCs-gephnIsc_nlsc-c26__NLSC_c26.txt",
	"plot_chart_42":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-geph-NLSC/mIPSCs-scFv-geph-NLSC/mIPSCs-geph-NLSC/nlsc-c27/hbp-00713_sIPSCs-scFvGephnlsc_sIPSCs-gephnIsc_nlsc-c27__NLSC_c27.txt",
	"plot_chart_43":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_mIPSCs-scFv-geph-NLSC/mIPSCs-scFv-geph-NLSC/mIPSCs-geph-NLSC/nlsc-c28/hbp-00713_sIPSCs-scFvGephnlsc_sIPSCs-gephnIsc_nlsc-c28__NLSC_c28.txt",
	"plot_chart_44":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-scFv-geph-NLS/sIPSCs-scFv-geph-NLS/sIPSCs-geph-NLS/ctrl-c1/hbp-00713_sIPSCs-scfv_sIPSCs-scfv_ctrl-c1__CTRL_c1.txt",
	"plot_chart_45":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-scFv-geph-NLS/sIPSCs-scFv-geph-NLS/sIPSCs-geph-NLS/ctrl-c2/hbp-00713_sIPSCs-scfv_sIPSCs-scfv_ctrl-c2__CTRL_c2.txt",
	"plot_chart_46":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-scFv-geph-NLS/sIPSCs-scFv-geph-NLS/sIPSCs-geph-NLS/ctrl-c3/hbp-00713_sIPSCs-scfv_sIPSCs-scfv_ctrl-c3__CTRL_c3.txt",
	"plot_chart_47":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-scFv-geph-NLS/sIPSCs-scFv-geph-NLS/sIPSCs-geph-NLS/ctrl-c4/hbp-00713_sIPSCs-scfv_sIPSCs-scfv_ctrl-c4__CTRL_c4.txt",
	"plot_chart_48":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-scFv-geph-NLS/sIPSCs-scFv-geph-NLS/sIPSCs-geph-NLS/ctrl-c5/hbp-00713_sIPSCs-scfv_sIPSCs-scfv_ctrl-c5__CTRL_c5.txt",
	"plot_chart_49":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-scFv-geph-NLS/sIPSCs-scFv-geph-NLS/sIPSCs-geph-NLS/ctrl-c6/hbp-00713_sIPSCs-scfv_sIPSCs-scfv_ctrl-c6__CTRL_c6.txt",
	"plot_chart_50":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-scFv-geph-NLS/sIPSCs-scFv-geph-NLS/sIPSCs-geph-NLS/ctrl-c7/hbp-00713_sIPSCs-scfv_sIPSCs-scfv_ctrl-c7__CTRL_c7.txt",
	"plot_chart_51":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-scFv-geph-NLS/sIPSCs-scFv-geph-NLS/sIPSCs-geph-NLS/ctrl-c8/hbp-00713_sIPSCs-scfv_sIPSCs-scfv_ctrl-c8__CTRL_c8.txt",
	"plot_chart_52":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-scFv-geph-NLS/sIPSCs-scFv-geph-NLS/sIPSCs-geph-NLS/scfv-c1/hbp-00713_sIPSCs-scfv_sIPSCs-scfv_scfv-c1__ScFv_c1.txt",
	"plot_chart_53":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-scFv-geph-NLS/sIPSCs-scFv-geph-NLS/sIPSCs-geph-NLS/scfv-c2/hbp-00713_sIPSCs-scfv_sIPSCs-scfv_scfv-c2__ScFv_c2.txt",
	"plot_chart_54":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-scFv-geph-NLS/sIPSCs-scFv-geph-NLS/sIPSCs-geph-NLS/scfv-c3/hbp-00713_sIPSCs-scfv_sIPSCs-scfv_scfv-c3__ScFv_c3.txt",
	"plot_chart_55":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-scFv-geph-NLS/sIPSCs-scFv-geph-NLS/sIPSCs-geph-NLS/scfv-c4/hbp-00713_sIPSCs-scfv_sIPSCs-scfv_scfv-c4__ScFv_c4.txt",
	"plot_chart_56":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-scFv-geph-NLS/sIPSCs-scFv-geph-NLS/sIPSCs-geph-NLS/scfv-c5/hbp-00713_sIPSCs-scfv_sIPSCs-scfv_scfv-c5__ScFv_c5.txt",
	"plot_chart_57":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-delta2-188/sIPSCs-delta2-188/sIPSCs-delta2-188/ctrl-c4/hbp-00713_sIPSCs-delta2-188_sIPSCs-delta2_ctrl-c4__CTRL_c4.txt",
	"plot_chart_58":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-delta2-188/sIPSCs-delta2-188/sIPSCs-delta2-188/ctrl-c5/hbp-00713_sIPSCs-delta2-188_sIPSCs-delta2_ctrl-c5__CTRL_c5.txt",
	"plot_chart_59":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-delta2-188/sIPSCs-delta2-188/sIPSCs-delta2-188/ctrl-c6/hbp-00713_sIPSCs-delta2-188_sIPSCs-delta2_ctrl-c6__CTRL_c6.txt",
	"plot_chart_60":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-delta2-188/sIPSCs-delta2-188/sIPSCs-delta2-188/ctrl-c7/hbp-00713_sIPSCs-delta2-188_sIPSCs-delta2_ctrl-c7__CTRL_c7.txt",
	"plot_chart_61":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-delta2-188/sIPSCs-delta2-188/sIPSCs-delta2-188/ctrl-c8/hbp-00713_sIPSCs-delta2-188_sIPSCs-delta2_ctrl-c8__CTRL_c8.txt",
	"plot_chart_62":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-delta2-188/sIPSCs-delta2-188/sIPSCs-delta2-188/ctrl-c9/hbp-00713_sIPSCs-delta2-188_sIPSCs-delta2_ctrl-c9__CTRL_c9.txt",
	"plot_chart_63":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-delta2-188/sIPSCs-delta2-188/sIPSCs-delta2-188/ctrl-c10/hbp-00713_sIPSCs-delta2-188_sIPSCs-delta2_ctrl-c10__CTRL_c10.txt",
	"plot_chart_64":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-delta2-188/sIPSCs-delta2-188/sIPSCs-delta2-188/delta2-188-c1/hbp-00713_sIPSCs-delta2-188_sIPSCs-delta2_delta2-188-c1__Delta2-188_c1.txt",
	"plot_chart_65":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-delta2-188/sIPSCs-delta2-188/sIPSCs-delta2-188/delta2-188-c2/hbp-00713_sIPSCs-delta2-188_sIPSCs-delta2_delta2-188-c2__Delta2-188_c2.txt",
	"plot_chart_66":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-delta2-188/sIPSCs-delta2-188/sIPSCs-delta2-188/delta2-188-c3/hbp-00713_sIPSCs-delta2-188_sIPSCs-delta2_delta2-188-c3__Delta2-188_c3.txt",
	"plot_chart_67":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-delta2-188/sIPSCs-delta2-188/sIPSCs-delta2-188/delta2-188-c4/hbp-00713_sIPSCs-delta2-188_sIPSCs-delta2_delta2-188-c4__Delta2-188_c4.txt",
	"plot_chart_68":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-delta2-188/sIPSCs-delta2-188/sIPSCs-delta2-188/delta2-188-c5/hbp-00713_sIPSCs-delta2-188_sIPSCs-delta2_delta2-188-c5__Delta2-188_c5.txt",
	"plot_chart_69":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-delta2-188/sIPSCs-delta2-188/sIPSCs-delta2-188/delta2-188-c6/hbp-00713_sIPSCs-delta2-188_sIPSCs-delta2_delta2-188-c6__Delta2-188_c6.txt",
	"plot_chart_70":"https://object.cscs.ch/v1/AUTH_63ea6845b1d34ad7a43c8158d9572867/hbp-00713_sIPSCs-delta2-188/sIPSCs-delta2-188/sIPSCs-delta2-188/delta2-188-c7/hbp-00713_sIPSCs-delta2-188_sIPSCs-delta2_delta2-188-c7__Delta2-188_c7.txt",
}

$(document).ready(function(){
	$('ul.tabs').tabs();
    $('.collapsible').collapsible({
        accordion: false,
        onOpenStart: function(el){
            if ($(el).hasClass("trace_plot")){
                extract_data_single("plot_chart_" + el.id);
            }
        },
    });
    $(".not-collapse").on("click", function(e) { e.stopPropagation(); });

    
	var h1 = document.getElementById("h1");
	var h = document.getElementById("h");
	var alphaf = document.getElementById("alphaf");
	var alphab = document.getElementById("alphab");
	var beta = document.getElementById("beta");
	var taud = document.getElementById("taud");
	var taur = document.getElementById("taur");
	var phi = document.getElementById("phi");
	var geph = document.getElementById("geph");
	var w = document.getElementById("w");

	var plotdiv = document.getElementById("plots");

	var margin = {
		l: 60,
		r: 25,
		b: 60,
		t: 35,
		pad: 15
	}

	var layout_01= {
		xaxis:{title:'time (ms)'}, 
		yaxis:{title:'Current (pA)'},
		legend: { "orientation":"h", y:-0.2 },
		showlegend:false,
		margin: margin,
	};

	$('#switch')[0].checked = false;
	$('#switch-lines')[0].checked=false;

	h.disabled = true;
	h1.disabled = true;
	alphaf.disabled = true;
	alphab.disabled = true;
	beta.disabled = true;
	taud.disabled = true;
	taur.disabled = true;
	phi.disabled = true;
	geph.disabled = true;
	w.disabled = true;
	v.disabled = true;
	e.disabled = true;

	h.value = "0.0193";
	h1.value = "0.1279";
	alphaf.value = "0.0246";
	alphab.value = "1.587e-05";
	beta.value = "56.2268";
	taud.value = "55.9307";
	taur.value = "0.7941"
	phi.value = "0.3477";
	geph.value = "2.2645";
	w.value = "8.7916e-04";
	v.value = "-60";
	e.value = "0";
	var n = 500;
	var x = [], y = [];
	for (var i = 0; i < n; i++) {
		x[i] = i ;
		y[i] = 1000*(h.value/h1.value)*[((2 - phi.value)*Math.pow(geph.value,2))/(2*phi.value)]*beta.value*alphaf.value*w.value*[(1-alphab.value*taud.value-1+alphab.value*taur.value)*Math.exp(-alphab.value*x[i])+(1-alphab.value*taur.value)*Math.exp(-x[i]/taud.value)-(1-alphab.value*taud.value)*Math.exp(-x[i]/taur.value)]*(v.value-e.value)/[(1-alphab.value*taud.value)*(1-alphab.value*taur.value)];
	}
	
	Plotly.newPlot("plotlyChart_01", [{x, y}], layout_01, {displayModeBar: false}, {responsive: true});
    
	resize_plots();

	$(window).resize(function(){
		resize_plots();
	});
    
	$("#h1,#h").keyup(validate_parameters)

	$("#h1,#h").on("change", validate_parameters);

	$('#run').click(function() {
		makeplot(layout_01)
	});    

	$('#switch').on("change", function() {
		if ($('#switch')[0].checked) { 
			h.disabled = false;
			h1.disabled = false;
			alphaf.disabled = false;
			alphab.disabled = false;
			beta.disabled = false;
			taud.disabled = false;
			taur.disabled = false;
			phi.disabled = false;
			geph.disabled = false;
			w.disabled = false;
			v.disabled = false;
			e.disabled = false;
		} else {
			h.disabled = true;
			h1.disabled = true;
			alphaf.disabled = true;
			alphab.disabled = true;
			beta.disabled = true;
			taud.disabled = true;
			taur.disabled = true;
			phi.disabled = true;
			geph.disabled = true;
			w.disabled = true;
			v.disabled = true;
			e.disabled = true;
			$("#message").hide();
			h.value = "0.0193";
			h1.value = "0.1279";
			alphaf.value = "0.0246";
			alphab.value = "1.587e-05";
			beta.value = "56.2268";
			taud.value = "55.9307";
			taur.value = "0.7941"
			phi.value = "0.3477";
			geph.value = "2.2645";
			w.value = "8.7916e-04";
			v.value = "-60";
			e.value = "0";
		}
	});

	$("#run").click();



});

//
function extract_data_single(plot_id){
    var x = document.getElementById(plot_id + "_loader");
    if (x.style.display == "none") {
        return
    } 

    var file = file_plot_dict[plot_id];
    var seg_id_str = 'segment_id=0'
    var format_str = 'format=json';
    var dsf_str = 'down_sample_factor=' + down_sample_factor.toString();
    var url_str = 'url=' + file;

    seg_url = neo_url + '/segmentdata/?' + seg_id_str + '&' + 
        format_str + '&' + url_str;
    $.getJSON(seg_url, function(seg_data){
        var crr_plt_div = plot_id;
        var sig_len = seg_data['analogsignals'].length;
        var as_str = 'analog_signal_id=0';
        var time_url = neo_url + '/analogsignaldata/?' + as_str + '&' +
            dsf_str + '&' + format_str + '&' + seg_id_str + '&' + 
            url_str;

        $.getJSON(time_url, function(time_data){ 
            var counter = 1;
            var time = time_data['values'];
            var all_data = new Array(sig_len - 1);
            for (var i = 1; i < sig_len; i ++){
                var as_str = 'analog_signal_id=' + i.toString();
                var sig_url = neo_url + '/analogsignaldata/?' + 
                    as_str + '&' + dsf_str + '&' + format_str + '&' + 
                    seg_id_str + '&' + url_str;
                $.getJSON(sig_url, function(sig_data){ 
                    var col_name = sig_data['name']
                    var col = parseInt(col_name.slice(7, col_name.length));
                    var crr_sig = sig_data['values'];
                    var crr_trace = {
                        x: time,
                        y: crr_sig,
                    };
                    all_data[col-1] = crr_trace;
                    if (counter != all_data.length){
                        counter++;
                    } else {
                        plot_all_data(plot_id, all_data);
                    }
                });

            }
        });
    });
}

//
function plot_all_data(plot_div_id, all_data){
    var x = document.getElementById(plot_div_id + "_loader");
    Plotly.newPlot(plot_div_id, all_data);
    x.style.display = "none";
}

function makeplot(layout_01) {
	var val_h=$('#h').val();
	var val_h1=$('#h1').val();
    var val_alphaf=$('#alphaf').val();
	var val_alphab=$('#alphab').val();
	var val_beta=$('#beta').val();
	var val_taud=$('#taud').val();
	var val_taur=$('#taur').val();
	var val_phi=$('#phi').val();
	var val_geph=$('#geph').val();
	var val_w=$('#w').val();
	var val_v=$('#v').val();
	var val_e=$('#e').val();
	
	var datap1 = plotlyChart_01.data;

	var datafinalp1 = [];

	if (datap1 && !(datap1[0].x.length == 0)){
		datafinalp1 = datap1;
	}

	var flag = $('#switch-lines')[0].checked;
	
	var n = 500;
	var x = [], y = [];
	for (var i = 0; i < n; i++) {
		x[i] = i ;
		y[i] = 1000*(val_h/val_h1)*[((2 - val_phi)*Math.pow(val_geph,2))/(2*val_phi)]*val_beta*val_alphaf*val_w*[(1-val_alphab*val_taud-1+val_alphab*val_taur)*Math.exp(-val_alphab*x[i])+(1-val_alphab*val_taur)*Math.exp(-x[i]/val_taud)-(1-val_alphab*val_taud)*Math.exp(-x[i]/val_taur)]*(val_v-val_e)/[(1-val_alphab*val_taud)*(1-val_alphab*val_taur)];
	}

	// if the "Keep line" checkbox is selected
	if (!flag == false){
		datafinalp1.push({x:x, y:y, name:'h_'+val_h+'_h1_'+val_h1});
		Plotly.react(plotlyChart_01, datafinalp1, layout_01);
	} else {
		Plotly.react(plotlyChart_01, [{x:x, y:y,name:'h_'+val_h+'_gh1_'+val_h1}], layout_01);
	}
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

	var val_h1=$('#h1').val();
	var val_h=$('#h').val();
	if(val_h1<0 || val_h1>5 || val_h<0 || val_h>5 || val_h1=='' || val_h==''){
		$("#message").show();
		$("#run").attr("disabled", true);
		$("#h1").css("background-color","#f8f8fa");
		$("#h").css("background-color","#f8f8fa");
	}
	else{
		$("#message").hide();
		$("#run").attr("disabled", false);
		$("#h1").css("background-color","#fff");
		$("#h").css("background-color","#fff");
	}
}


function openCollapsible(el){
    var el_text = document.getElementById(el.id + "_text");
    var parent_ul = $(el).closest('ul');
    var parent_ul_id = parent_ul[0]["attributes"].id;
    var closest_li = $(el).closest('li');
    var closest_li_id = closest_li[0].id;
    var parent_ul_obj = document.getElementById(parent_ul_id.nodeValue);
    var instance = M.Collapsible.getInstance(parent_ul_obj);

    for (var j = 0; j < parent_ul[0].childNodes.length; j++){
        var crr_child = parent_ul[0].childNodes[j];
        if (crr_child["attributes"] != undefined){
            var crr_child_id = crr_child["attributes"].id;
            var child_id = crr_child_id.nodeValue
            if (child_id == closest_li_id){
                var substract = Math.floor(j/2);
                if(el_text.innerText == "View"){
                    el_text.innerText = "Hide";
                    instance.open(j-1-substract);
                } else {
                    el_text.innerText = "View";
                    instance.close(j-1-substract);
                }
                break;
            }
        }
    }
}
