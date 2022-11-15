
$(document).ready(function () {

    Chart_Nifty_50 = []             // for Candlestick
    Chart_Nifty_Bank = []           // for Candlestick
    Chart_Nifty_Fin_Service = []    // for Candlestick

    Bar_Nifty_50_exp_1 = []             // for Histogram
    Bar_Nifty_Bank_exp_1 = []           // for Histogram
    Bar_Nifty_Fin_Service_exp_1 = []    // for Histogram
    Bar_Nifty_50_exp_2 = []             // for Histogram
    Bar_Nifty_Bank_exp_2 = []           // for Histogram
    Bar_Nifty_Fin_Service_exp_2 = []    // for Histogram

    Bottom_Right_Bar_Nifty_50_exp_1 = []             // for Bottom_Right
    Bottom_Right_Bar_Nifty_Bank_exp_1 = []           // for Bottom_Right
    Bottom_Right_Bar_Nifty_Fin_Service_exp_1 = []    // for Bottom_Right
    Bottom_Right_Bar_Nifty_50_exp_2 = []             // for Bottom_Right
    Bottom_Right_Bar_Nifty_Bank_exp_2 = []           // for Bottom_Right
    Bottom_Right_Bar_Nifty_Fin_Service_exp_2 = []    // for Bottom_Right

    Dial_Nifty_50_exp_1 = []             // for Dials
    Dial_Nifty_Bank_exp_1 = []           // for Dials
    Dial_Nifty_Fin_Service_exp_1 = []    // for Dials
    Dial_Nifty_50_exp_2 = []             // for Dials
    Dial_Nifty_Bank_exp_2 = []           // for Dials
    Dial_Nifty_Fin_Service_exp_2 = []    // for Dials

    Counter_for_Nifty_50_3min = 0
    Counter_for_Nifty_Bank_3min = 0
    Counter_for_Nifty_Fin_Service_3min = 0

    Counter_for_Nifty_50_15min = 0                  // counter for Time_Frame
    Counter_for_Nifty_Bank_15min = 0                // counter for Time_Frame                
    Counter_for_Nifty_Fin_Service_15min = 0         // counter for Time_Frame
    Counter_for_Nifty_50_15min_exp_2 = 0            // counter for Time_Frame
    Counter_for_Nifty_Bank_15min_exp_2 = 0          // counter for Time_Frame
    Counter_for_Nifty_Fin_Service_15min_exp_2 = 0   // counter for Time_Frame

    Counter_for_Nifty_50_30min = 0                  // counter for Time_Frame
    Counter_for_Nifty_Bank_30min = 0                // counter for Time_Frame
    Counter_for_Nifty_Fin_Service_30min = 0         // counter for Time_Frame
    Counter_for_Nifty_50_30min_exp_2 = 0            // counter for Time_Frame
    Counter_for_Nifty_Bank_30min_exp_2 = 0          // counter for Time_Frame
    Counter_for_Nifty_Fin_Service_30min_exp_2 = 0   // counter for Time_Frame

    Expiry_Counter_for_Nifty_50_15min = 0                  // counter for Expiry
    Expiry_Counter_for_Nifty_Bank_15min = 0                // counter for Expiry               
    Expiry_Counter_for_Nifty_Fin_Service_15min = 0         // counter for Expiry
    Expiry_Counter_for_Nifty_50_15min_exp_2 = 0            // counter for Expiry
    Expiry_Counter_for_Nifty_Bank_15min_exp_2 = 0          // counter for Expiry
    Expiry_Counter_for_Nifty_Fin_Service_15min_exp_2 = 0   // counter for Expiry

    Expiry_Counter_for_Nifty_50_30min = 0                  // counter for Expiry
    Expiry_Counter_for_Nifty_Bank_30min = 0                // counter for Expiry
    Expiry_Counter_for_Nifty_Fin_Service_30min = 0         // counter for Expiry
    Expiry_Counter_for_Nifty_50_30min_exp_2 = 0            // counter for Expiry
    Expiry_Counter_for_Nifty_Bank_30min_exp_2 = 0          // counter for Expiry
    Expiry_Counter_for_Nifty_Fin_Service_30min_exp_2 = 0   // counter for Expiry

    $.ajaxSetup({ async: false });  // to stop async 

    // For Expiry

    $.post("https://students.tradingcafeindia.com/tc_indicator/get_running_expiry", { 'script': 'NIFTY 50' }, function (data, status) {
        Expiry_Nifty_50 = data
        console.log("NIFTY_50 Data: " + data + "\nStatus: " + status);
    });

    $.post("https://students.tradingcafeindia.com/tc_indicator/get_running_expiry", { 'script': 'NIFTY BANK' }, function (data, status) {
        Expiry_Nifty_Bank = data
        console.log("NIFTY_BANK Data: " + data + "\nStatus: " + status);
    });

    $.post("https://students.tradingcafeindia.com/tc_indicator/get_running_expiry", { 'script': 'NIFTY FIN SERVICE' }, function (data, status) {
        Expiry_Nifty_Fin_Service = data
        console.log("NIFTY_FIN_SERVICE Data: " + data + "\nStatus: " + status);
    });

    // For Candlestick

    $.post("https://students.tradingcafeindia.com/tc_indicator/chart", { 'script': 'NIFTY 50' }, function (data, status) {
        Chart_Nifty_50 = data
        console.log("NIFTY_50 Data: " + data + "\nStatus: " + status);
        console.log(Chart_Nifty_50);
    });

    $.post("https://students.tradingcafeindia.com/tc_indicator/chart", { 'script': 'NIFTY BANK' }, function (data, status) {
        Chart_Nifty_Bank = data
        console.log("NIFTY_BANK Data: " + data + "\nStatus: " + status);
        console.log(Chart_Nifty_Bank);
    });

    $.post("https://students.tradingcafeindia.com/tc_indicator/chart", { 'script': 'NIFTY FIN SERVICE' }, function (data, status) {
        Chart_Nifty_Fin_Service = data
        console.log("NIFTY_FIN_SERVICE Data: " + data + "\nStatus: " + status);
        console.log(Chart_Nifty_Fin_Service);
    });


    let compare = 0;
    console.log("ready!");
    var x = moment.unix(Expiry_Nifty_50[0][0]).format('MMM-D')
    var y = moment.unix(Expiry_Nifty_50[1][0]).format('MMM-D')
    $('#1st_dropdown_value').attr('value', x)
    $('#2nd_dropdown_value').attr('value', y)
    $('#1st_dropdown_value').text(x + ' ' + Expiry_Nifty_50[0][1])
    $('#2nd_dropdown_value').text(y + ' ' + Expiry_Nifty_50[1][1])

    Nifty_50_exp_1 = moment.unix(Expiry_Nifty_50[0][0]).format('DDMMM')
    Nifty_50_exp_2 = moment.unix(Expiry_Nifty_50[1][0]).format('DDMMM')
    Nifty_Bank_exp_1 = moment.unix(Expiry_Nifty_Bank[0][0]).format('DDMMM')
    Nifty_Bank_exp_2 = moment.unix(Expiry_Nifty_Bank[1][0]).format('DDMMM')
    Nifty_Fin_Service_exp_1 = moment.unix(Expiry_Nifty_Fin_Service[0][0]).format('DDMMM')
    Nifty_Fin_Service_exp_2 = moment.unix(Expiry_Nifty_Fin_Service[1][0]).format('DDMMM')

    // For Histogram

    $.post("https://students.tradingcafeindia.com/tc_indicator/op_histogram", { 'script': 'NIFTY 50', 'exp': Nifty_50_exp_1 }, function (data, status) {
        Bar_Nifty_50_exp_1 = data
        console.log(Bar_Nifty_50_exp_1)
    });

    $.post("https://students.tradingcafeindia.com/tc_indicator/op_histogram", { 'script': 'NIFTY BANK', 'exp': Nifty_Bank_exp_1 }, function (data, status) {
        Bar_Nifty_Bank_exp_1 = data
        console.log(Bar_Nifty_Bank_exp_1)
    });

    $.post("https://students.tradingcafeindia.com/tc_indicator/op_histogram", { 'script': 'NIFTY FIN SERVICE', 'exp': Nifty_Fin_Service_exp_1 }, function (data, status) {
        Bar_Nifty_Fin_Service_exp_1 = data
        console.log(Bar_Nifty_Fin_Service_exp_1)
    });

    $.post("https://students.tradingcafeindia.com/tc_indicator/op_histogram", { 'script': 'NIFTY 50', 'exp': Nifty_50_exp_2 }, function (data, status) {
        Bar_Nifty_50_exp_2 = data
        console.log(Bar_Nifty_50_exp_2);
    });

    $.post("https://students.tradingcafeindia.com/tc_indicator/op_histogram", { 'script': 'NIFTY BANK', 'exp': Nifty_Bank_exp_2 }, function (data, status) {
        Bar_Nifty_Bank_exp_2 = data
        console.log(Bar_Nifty_Bank_exp_2);
    });

    $.post("https://students.tradingcafeindia.com/tc_indicator/op_histogram", { 'script': 'NIFTY FIN SERVICE', 'exp': Nifty_Fin_Service_exp_2 }, function (data, status) {
        Bar_Nifty_Fin_Service_exp_2 = data
        console.log(Bar_Nifty_Fin_Service_exp_2);
    });




    // For Bottom_Right Bar 

    $.post("https://students.tradingcafeindia.com/tc_indicator/op_bargraph", { 'script': 'NIFTY 50', 'exp': Nifty_50_exp_1, 'exp_type': Expiry_Nifty_50[0][1] }, function (data, status) {
        Bottom_Right_Bar_Nifty_50_exp_1 = data
        console.log(Bottom_Right_Bar_Nifty_50_exp_1)
    });

    $.post("https://students.tradingcafeindia.com/tc_indicator/op_bargraph", { 'script': 'NIFTY BANK', 'exp': Nifty_Bank_exp_1, 'exp_type': Expiry_Nifty_Bank[0][1] }, function (data, status) {
        Bottom_Right_Bar_Nifty_Bank_exp_1 = data
        console.log(Bottom_Right_Bar_Nifty_Bank_exp_1)
    });

    $.post("https://students.tradingcafeindia.com/tc_indicator/op_bargraph", { 'script': 'NIFTY FIN SERVICE', 'exp': Nifty_Fin_Service_exp_1, 'exp_type': Expiry_Nifty_Fin_Service[0][1] }, function (data, status) {
        Bottom_Right_Bar_Nifty_Fin_Service_exp_1 = data
        console.log(Bottom_Right_Bar_Nifty_Fin_Service_exp_1)
    });

    $.post("https://students.tradingcafeindia.com/tc_indicator/op_bargraph", { 'script': 'NIFTY 50', 'exp': Nifty_50_exp_2, 'exp_type': Expiry_Nifty_50[1][1] }, function (data, status) {
        Bottom_Right_Bar_Nifty_50_exp_2 = data
        console.log(Bottom_Right_Bar_Nifty_50_exp_2);
    });

    $.post("https://students.tradingcafeindia.com/tc_indicator/op_bargraph", { 'script': 'NIFTY BANK', 'exp': Nifty_Bank_exp_2, 'exp_type': Expiry_Nifty_Bank[1][1] }, function (data, status) {
        Bottom_Right_Bar_Nifty_Bank_exp_2 = data
        console.log(Bottom_Right_Bar_Nifty_Bank_exp_2);
    });

    $.post("https://students.tradingcafeindia.com/tc_indicator/op_bargraph", { 'script': 'NIFTY FIN SERVICE', 'exp': Nifty_Fin_Service_exp_2, 'exp_type': Expiry_Nifty_Fin_Service[1][1] }, function (data, status) {
        Bottom_Right_Bar_Nifty_Fin_Service_exp_2 = data
        console.log(Bottom_Right_Bar_Nifty_Fin_Service_exp_2);
    });



    // For Dials

    $.post("https://students.tradingcafeindia.com/tc_indicator/op_dial", { 'script': 'NIFTY 50', 'exp': Nifty_50_exp_1, 'exp_type': Expiry_Nifty_50[0][1] }, function (data, status) {
        Dial_Nifty_50_exp_1 = data
        console.log(Dial_Nifty_50_exp_1)
        if (Dial_Nifty_50_exp_1.length == 0) { return }
        if (parseFloat(Dial_Nifty_50_exp_1[0][2]) > 0) {
            $('#PCM_Color').removeClass()
            $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
            $('#PCM_Arrow').removeClass()
            $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
        }
        else if (parseFloat(Dial_Nifty_50_exp_1[0][2]) < 0) {
            $('#PCM_Color').removeClass()
            $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
            $('#PCM_Arrow').removeClass()
            $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
        }
        else if (parseFloat(Dial_Nifty_50_exp_1[0][2]) == 0) {
            $('#PCM_Color').removeClass()
            $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
            $('#PCM_Arrow').removeClass()
            $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
        }
    });

    $.post("https://students.tradingcafeindia.com/tc_indicator/op_dial", { 'script': 'NIFTY BANK', 'exp': Nifty_Bank_exp_1, 'exp_type': Expiry_Nifty_Bank[0][1] }, function (data, status) {
        Dial_Nifty_Bank_exp_1 = data
        console.log(Dial_Nifty_Bank_exp_1)
    });

    $.post("https://students.tradingcafeindia.com/tc_indicator/op_dial", { 'script': 'NIFTY FIN SERVICE', 'exp': Nifty_Fin_Service_exp_1, 'exp_type': Expiry_Nifty_Fin_Service[0][1] }, function (data, status) {
        Dial_Nifty_Fin_Service_exp_1 = data
        console.log(Dial_Nifty_Fin_Service_exp_1)
    });

    $.post("https://students.tradingcafeindia.com/tc_indicator/op_dial", { 'script': 'NIFTY 50', 'exp': Nifty_50_exp_2, 'exp_type': Expiry_Nifty_50[1][1] }, function (data, status) {
        Dial_Nifty_50_exp_2 = data
        console.log(Dial_Nifty_50_exp_2);
    });

    $.post("https://students.tradingcafeindia.com/tc_indicator/op_dial", { 'script': 'NIFTY BANK', 'exp': Nifty_Bank_exp_2, 'exp_type': Expiry_Nifty_Bank[1][1] }, function (data, status) {
        Dial_Nifty_Bank_exp_2 = data
        console.log(Dial_Nifty_Bank_exp_2);
    });

    $.post("https://students.tradingcafeindia.com/tc_indicator/op_dial", { 'script': 'NIFTY FIN SERVICE', 'exp': Nifty_Fin_Service_exp_2, 'exp_type': Expiry_Nifty_Fin_Service[1][1] }, function (data, status) {
        Dial_Nifty_Fin_Service_exp_2 = data
        console.log(Dial_Nifty_Fin_Service_exp_2);
    });



    // On click Function of 3 BUTTONS [NIFTY 50, NIFTY BANK, NIFTY FIN SERVICE]

    $('#nifty_btn').click(function () {
        let compare = 0;
        $('#nifty_btn').addClass('gb_active')
        $('#bnknifty_btn').removeClass('gb_active')
        $('#finnifty_btn').removeClass('gb_active')
        var x = moment.unix(Expiry_Nifty_50[0][0]).format('MMM-D')
        var y = moment.unix(Expiry_Nifty_50[1][0]).format('MMM-D')
        $('#1st_dropdown_value').attr('value', x)
        $('#2nd_dropdown_value').attr('value', y)
        $('#1st_dropdown_value').text(x + ' ' + Expiry_Nifty_50[0][1])
        $('#2nd_dropdown_value').text(y + ' ' + Expiry_Nifty_50[1][1])
        $("#Expiry").prop("selectedIndex", 0);
        $("#Time_Frame").prop("selectedIndex", 0);
        if (Nifty_50_exp_1_Dial > 0) {
            $('#sentiment_dial_Color').removeClass()
            $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
            $('#sentiment_dial_Arrow').removeClass()
            $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
        }
        else if (Nifty_50_exp_1_Dial < 0) {
            $('#sentiment_dial_Color').removeClass()
            $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
            $('#sentiment_dial_Arrow').removeClass()
            $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
        }
        else if (Nifty_50_exp_1_Dial == 0) {
            $('#sentiment_dial_Color').removeClass()
            $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
            $('#sentiment_dial_Arrow').removeClass()
            $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
        }

        if (Dial_Nifty_50_exp_1.length != 0) {
            if (parseFloat(Dial_Nifty_50_exp_1[0][2]) > 0) {
                $('#PCM_Color').removeClass()
                $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                $('#PCM_Arrow').removeClass()
                $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
            }
            else if (parseFloat(Dial_Nifty_50_exp_1[0][2]) < 0) {
                $('#PCM_Color').removeClass()
                $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                $('#PCM_Arrow').removeClass()
                $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
            }
            else if (parseFloat(Dial_Nifty_50_exp_1[0][2]) == 0) {
                $('#PCM_Color').removeClass()
                $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                $('#PCM_Arrow').removeClass()
                $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
            }
        }
        highchart.update({
            title: {
                text: 'Nifty 50',
                align: 'left',
                style: {
                    "color": "White",
                    "fontSize": "20px",
                    "fontWeight": "bold",
                    "fontFamily": "Outfit"
                }
            },
            tooltip: {
                split: true,
                formatter: function () {
                    tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                    for (var i = 0; i < this.points.length; i++) {
                        if (i == 0) {
                            if (i == 0) {
                                console.log(this.points[i].y)
                                for (var j = 0; j < ohlc.length; j++) {
                                    if (this.points[i].y == ohlc[j][4]) {
                                        i = j
                                        tooltipArray.push('Open:' + ohlc[i][1] + '<br> High:' + ohlc[i][2] + '<br> Low:' + ohlc[i][3] + '<br> Close:' + ohlc[i][4])
                                        break;
                                    }
                                }
                                i = 0
                            }
                        }
                        else if (i == 1) {
                            tooltipArray.push('Volume:' + this.points[i].y)
                        }
                    }
                    return tooltipArray;
                }
            },
            series: [
                {
                    type: 'candlestick',
                    name: 'AAPL',
                    data: ohlc,
                    dataGrouping: {
                        enabled: false,
                        // units: groupingUnits
                    }
                },
                {
                    type: 'column',
                    name: 'Volume',
                    data: Volume,
                    yAxis: 1,
                    dataGrouping: {
                        enabled: false,
                        // units: groupingUnits
                    }
                }
            ]
        }),
            chart_2.updateSeries([{
                data: [Bottom_Right_Array_1[1], Bottom_Right_Array_1[2]],
            }])
    })
    $('#bnknifty_btn').click(function () {
        let compare = 0;
        $('#nifty_btn').removeClass('gb_active')
        $('#bnknifty_btn').addClass('gb_active')
        $('#finnifty_btn').removeClass('gb_active')
        var x = moment.unix(Expiry_Nifty_Bank[0][0]).format('MMM-D')
        var y = moment.unix(Expiry_Nifty_Bank[1][0]).format('MMM-D')
        $('#1st_dropdown_value').attr('value', x)
        $('#2nd_dropdown_value').attr('value', y)
        $('#1st_dropdown_value').text(x + ' ' + Expiry_Nifty_Bank[0][1])
        $('#2nd_dropdown_value').text(y + ' ' + Expiry_Nifty_Bank[1][1])
        $("#Expiry").prop("selectedIndex", 0);
        $("#Time_Frame").prop("selectedIndex", 0);
        if (Nifty_Bank_exp_1_Dial > 0) {
            $('#sentiment_dial_Color').removeClass()
            $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
            $('#sentiment_dial_Arrow').removeClass()
            $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
        }
        else if (Nifty_Bank_exp_1_Dial < 0) {
            $('#sentiment_dial_Color').removeClass()
            $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
            $('#sentiment_dial_Arrow').removeClass()
            $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
        }
        else if (Nifty_Bank_exp_1_Dial == 0) {
            $('#sentiment_dial_Color').removeClass()
            $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
            $('#sentiment_dial_Arrow').removeClass()
            $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
        }

        if (Dial_Nifty_Bank_exp_1.length != 0) {
            if (parseFloat(Dial_Nifty_Bank_exp_1[0][2]) > 0) {
                $('#PCM_Color').removeClass()
                $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                $('#PCM_Arrow').removeClass()
                $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
            }
            else if (parseFloat(Dial_Nifty_Bank_exp_1[0][2]) < 0) {
                $('#PCM_Color').removeClass()
                $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                $('#PCM_Arrow').removeClass()
                $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
            }
            else if (parseFloat(Dial_Nifty_Bank_exp_1[0][2]) == 0) {
                $('#PCM_Color').removeClass()
                $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                $('#PCM_Arrow').removeClass()
                $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
            }
        }
        if (Counter_for_Nifty_Bank_3min == 0) {
            Counter_for_Nifty_Bank_3min += 1;
            ohlc_1 = []
            Volume_1 = []
            Volume_1_exp_2 = []
            dataLength_1 = Chart_Nifty_Bank.length
            console.log(dataLength_1)

            let First_candle_time = parseFloat(moment.unix(parseFloat(Chart_Nifty_Bank[0][0])).format('h.mm'))
            console.log(First_candle_time)
            let First_Histo_time = parseFloat(moment.unix(Array_3[0][0]).format('h.mm'))
            console.log(First_Histo_time)
            let First_Histo_time_exp_2 = parseFloat(moment.unix(Array_3_exp_2[0][0]).format('h.mm'))
            console.log(First_Histo_time_exp_2)


            if (First_candle_time < First_Histo_time) {
                console.log('start from First_candle_time')
                console.log('Add to Histogram')

                var start = moment.unix(parseFloat(Chart_Nifty_Bank[0][0])).format('h:mm')
                var end = moment.unix(Array_3[0][0]).format('h:mm')

                var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
                console.log("mins = ", mins)

                How_many_times_addition = Math.round(parseFloat(mins) / 3) - 1
                console.log('How_many_times_addition = ' + How_many_times_addition)
                Dummy = []
                Dummy_1 = []
                for (var i = 0; i < How_many_times_addition; i++) {
                    Dummy.push(parseFloat(Chart_Nifty_Bank[i + 1][0]), 0)
                    Dummy_1.push(Dummy)
                    Dummy = []
                }
                for (var i = 0; i < Array_3.length; i++) {
                    Dummy_1.push(Array_3[i])
                }
                console.log(Dummy_1)
                Array_3 = []
                Array_3 = Dummy_1
            }
            else if (First_candle_time >= First_Histo_time) {
                Dummy_1 = []
                console.log('start from First_Histo_time')
                console.log('Remove from Histogram')

                var end = moment.unix(parseFloat(Chart_Nifty_Bank[0][0])).format('h:mm')
                var start = moment.unix(Array_3[0][0]).format('h:mm')

                var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
                console.log("mins = ", mins)

                How_many_times_addition = Math.round(parseFloat(mins) / 3) + 1
                console.log('How_many_times_addition = ' + How_many_times_addition)
                for (var i = How_many_times_addition; i < Array_3.length; i++) {
                    Dummy_1.push(Array_3[i])
                }
                Array_3 = []
                Array_3 = Dummy_1
            }

            if (First_candle_time < First_Histo_time_exp_2) {
                console.log('start from First_candle_time')
                console.log('Add to Histogram')

                var start = moment.unix(parseFloat(Chart_Nifty_Bank[0][0])).format('h:mm')
                var end = moment.unix(Array_3_exp_2[0][0]).format('h:mm')

                var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
                console.log("mins = ", mins)

                How_many_times_addition = Math.round(parseFloat(mins) / 3) - 1
                Dummy = []
                Dummy_1 = []
                for (var i = 0; i < How_many_times_addition; i++) {
                    Dummy.push(parseFloat(Chart_Nifty_Bank[i + 1][0]), 0)
                    Dummy_1.push(Dummy)
                    Dummy = []
                }
                for (var i = 0; i < Array_3_exp_2.length; i++) {
                    Dummy_1.push(Array_3_exp_2[i])
                }
                console.log(Dummy_1)
                Array_3_exp_2 = []
                Array_3_exp_2 = Dummy_1
            }
            else if (First_candle_time >= First_Histo_time_exp_2) {
                Dummy_1 = []
                console.log('start from First_Histo_time')
                console.log('Remove from Histogram')

                var end = moment.unix(parseFloat(Chart_Nifty_Bank[0][0])).format('h:mm')
                var start = moment.unix(Array_3_exp_2[0][0]).format('h:mm')

                var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
                console.log("mins = ", mins)

                How_many_times_addition = Math.round(parseFloat(mins) / 3) + 1
                for (var i = How_many_times_addition; i < Array_3_exp_2.length; i++) {
                    Dummy_1.push(Array_3_exp_2[i])
                }
                Array_3_exp_2 = []
                Array_3_exp_2 = Dummy_1
            }

            let Last_candle_time = parseFloat(moment.unix(parseFloat(Chart_Nifty_Bank[Chart_Nifty_Bank.length - 1][0])).format('h.mm'))
            console.log(Last_candle_time)
            let Last_Histo_time = parseFloat(moment.unix(Array_3[Array_3.length - 1][0]).format('h.mm'))
            console.log(Last_Histo_time)
            let Last_Histo_time_exp_2 = parseFloat(moment.unix(Array_3_exp_2[Array_3_exp_2.length - 1][0]).format('h.mm'))
            console.log(Last_Histo_time_exp_2)

            if (Last_candle_time >= Last_Histo_time) {
                console.log(Last_candle_time, Last_Histo_time)
                console.log('Add to Histogram')
                console.log(Last_Histo_time + Last_candle_time)

                var end = moment.unix(parseFloat(Chart_Nifty_Bank[Chart_Nifty_Bank.length - 1][0])).format('h:mm')
                var start = moment.unix(Array_3[Array_3.length - 1][0]).format('h:mm')

                var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
                console.log("mins = ", mins)

                How_many_times_addition = Math.round(parseFloat(mins) / 3) + 1
                console.log('How_many_times_addition = ' + How_many_times_addition)
                Dummy = []
                Dummy_1 = []
                sample = []
                sample = Array_3
                len = sample.length + How_many_times_addition - 1
                for (var i = sample.length - 1; i < len; i++) {
                    Dummy.push(parseFloat(sample[i][0]) + 180, 0)
                    sample.push(Dummy)
                    Dummy = []
                    console.log(sample[sample.length - 1])
                }
                Array_3 = sample
            }
            else if (Last_candle_time < Last_Histo_time) {
                Dummy_1 = []
                console.log('start from Last_Histo_time')
                console.log('Remove from Histogram')

                var start = moment.unix(parseFloat(Chart_Nifty_Bank[Chart_Nifty_Bank.length - 1][0])).format('h:mm')
                var end = moment.unix(Array_3[Array_3.length - 1][0]).format('h:mm')

                var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
                console.log("mins = ", mins)
                How_many_times_subtraction = Math.round(parseFloat(mins) / 3) - 1
                for (var i = 0; i < How_many_times_subtraction; i++) {
                    Array_3.pop()
                }
            }

            if (Last_candle_time >= Last_Histo_time_exp_2) {
                console.log('start from Last_candle_time')
                console.log('Add to Histogram')

                var end = moment.unix(parseFloat(Chart_Nifty_Bank[Chart_Nifty_Bank.length - 1][0])).format('h:mm')
                var start = moment.unix(Array_3_exp_2[Array_3_exp_2.length - 1][0]).format('h:mm')

                var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
                console.log("mins = ", mins)

                How_many_times_addition = Math.round(parseFloat(mins) / 3) + 1
                Dummy = []
                Dummy_1 = []
                sample = []
                sample = Array_3_exp_2
                len = sample.length + How_many_times_addition - 1
                for (var i = sample.length - 1; i < len; i++) {
                    Dummy.push(parseFloat(sample[i][0]) + 180, 0)
                    sample.push(Dummy)
                    Dummy = []
                }
                Array_3_exp_2 = sample
            }
            else if (Last_candle_time < Last_Histo_time_exp_2) {
                Dummy_1 = []
                console.log('start from Last_Histo_time')
                console.log('Remove from Histogram')

                var start = moment.unix(parseFloat(Chart_Nifty_Bank[Chart_Nifty_Bank.length - 1][0])).format('h:mm')
                var end = moment.unix(Array_3_exp_2[Array_3_exp_2.length - 1][0]).format('h:mm')

                var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
                console.log("mins = ", mins)

                How_many_times_subtraction = Math.round(parseFloat(mins) / 3) - 1
                for (var i = 0; i < How_many_times_subtraction; i++) {
                    Array_3_exp_2.pop()
                }
            }






            groupingUnits = [[
                'week',             // unit name
                [1]               // allowed multiples
            ], [
                'month',
                [1, 2, 3, 4, 6]
            ]],

                i = 0;

            for (i; i < dataLength_1; i += 1) {
                // if (i != (dataLength - 1)) {
                ohlc_1.push([
                    parseFloat(Array_3[i][0]), // the date
                    parseFloat(Chart_Nifty_Bank[i][1]), // open
                    parseFloat(Chart_Nifty_Bank[i][2]), // high
                    parseFloat(Chart_Nifty_Bank[i][3]), // low
                    parseFloat(Chart_Nifty_Bank[i][4]) // close
                ]);
                // }
            }
            for (var i = 0; i < Array_3.length; i++) {
                // console.log(i)
                Volume_1.push({
                    x: parseFloat(Array_3[i][0]), // the date
                    y: parseFloat(Array_3[i][1]), // the Volume
                    color: VolumeBarColor(parseFloat(Array_3[i][1]))
                });
            }
            for (var i = 0; i < Array_3_exp_2.length; i++) {
                // console.log(i)
                Volume_1_exp_2.push({
                    x: parseFloat(Array_3[i][0]), // the date
                    y: parseFloat(Array_3_exp_2[i][1]), // the Volume
                    color: VolumeBarColor(parseFloat(Array_3_exp_2[i][1]))
                });
            }
        }
        highchart.update({
            title: {
                text: 'Nifty Bank',
                align: 'left',
                style: {
                    "color": "White",
                    "fontSize": "20px",
                    "fontWeight": "bold",
                    "fontFamily": "Outfit"
                }
            },
            tooltip: {
                split: true,
                formatter: function () {
                    tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                    for (var i = 0; i < this.points.length; i++) {
                        if (i == 0) {
                            if (i == 0) {
                                console.log(this.points[i].y)
                                for (var j = 0; j < ohlc_1.length; j++) {
                                    if (this.points[i].y == ohlc_1[j][4]) {
                                        i = j
                                        tooltipArray.push('Open:' + ohlc_1[i][1] + '<br> High:' + ohlc_1[i][2] + '<br> Low:' + ohlc_1[i][3] + '<br> Close:' + ohlc_1[i][4])
                                        break;
                                    }
                                }
                                i = 0
                            }
                        }
                        else if (i == 1) {
                            tooltipArray.push('Volume:' + this.points[i].y)
                        }
                    }
                    return tooltipArray;
                }
            },
            series: [
                {
                    type: 'candlestick',
                    name: 'AAPL',
                    data: ohlc_1,
                    dataGrouping: {
                        enabled: false,
                        // units: groupingUnits
                    }
                },
                {
                    type: 'column',
                    name: 'Volume',
                    data: Volume_1,
                    yAxis: 1,
                    dataGrouping: {
                        enabled: false,
                        // units: groupingUnits
                    }
                }
            ]
        }),
            chart_2.updateSeries([{
                data: [Bottom_Right_Array_2[1], Bottom_Right_Array_2[2]],
            }])
    })
    $('#finnifty_btn').click(function () {
        let compare = 0;
        $('#nifty_btn').removeClass('gb_active')
        $('#bnknifty_btn').removeClass('gb_active')
        $('#finnifty_btn').addClass('gb_active')
        var x = moment.unix(Expiry_Nifty_Fin_Service[0][0]).format('MMM-D')
        var y = moment.unix(Expiry_Nifty_Fin_Service[1][0]).format('MMM-D')
        $('#1st_dropdown_value').attr('value', x)
        $('#2nd_dropdown_value').attr('value', y)
        $('#1st_dropdown_value').text(x + ' ' + Expiry_Nifty_Fin_Service[0][1])
        $('#2nd_dropdown_value').text(y + ' ' + Expiry_Nifty_Fin_Service[1][1])
        $("#Expiry").prop("selectedIndex", 0);
        $("#Time_Frame").prop("selectedIndex", 0);

        if (Nifty_Fin_Service_exp_1_Dial > 0) {
            $('#sentiment_dial_Color').removeClass()
            $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
            $('#sentiment_dial_Arrow').removeClass()
            $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
        }
        else if (Nifty_Fin_Service_exp_1_Dial < 0) {
            $('#sentiment_dial_Color').removeClass()
            $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
            $('#sentiment_dial_Arrow').removeClass()
            $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
        }
        else if (Nifty_Fin_Service_exp_1_Dial == 0) {
            $('#sentiment_dial_Color').removeClass()
            $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
            $('#sentiment_dial_Arrow').removeClass()
            $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
        }

        if (Dial_Nifty_Fin_Service_exp_1.length != 0) {
            if (parseFloat(Dial_Nifty_Fin_Service_exp_1[0][2]) > 0) {
                $('#PCM_Color').removeClass()
                $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                $('#PCM_Arrow').removeClass()
                $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
            }
            else if (parseFloat(Dial_Nifty_Fin_Service_exp_1[0][2]) < 0) {
                $('#PCM_Color').removeClass()
                $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                $('#PCM_Arrow').removeClass()
                $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
            }
            else if (parseFloat(Dial_Nifty_Fin_Service_exp_1[0][2]) == 0) {
                $('#PCM_Color').removeClass()
                $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                $('#PCM_Arrow').removeClass()
                $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
            }
        }
        if (Counter_for_Nifty_Fin_Service_3min == 0) {
            Counter_for_Nifty_Fin_Service_3min += 1
            ohlc_2 = []
            Volume_2 = []
            Volume_2_exp_2 = []
            dataLength_2 = Chart_Nifty_Fin_Service.length
            console.log(dataLength_2)

            let First_candle_time = parseFloat(moment.unix(parseFloat(Chart_Nifty_Fin_Service[0][0])).format('h.mm'))
            console.log(First_candle_time)
            let First_Histo_time = parseFloat(moment.unix(Array_5[0][0]).format('h.mm'))
            console.log(First_Histo_time)
            let First_Histo_time_exp_2 = parseFloat(moment.unix(Array_5_exp_2[0][0]).format('h.mm'))
            console.log(First_Histo_time_exp_2)

            if (First_candle_time < First_Histo_time) {
                console.log('start from First_candle_time')
                console.log('Add to Histogram')

                var start = moment.unix(parseFloat(Chart_Nifty_Fin_Service[0][0])).format('h:mm')
                var end = moment.unix(Array_5[0][0]).format('h:mm')

                var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
                console.log("mins = ", mins)

                How_many_times_addition = Math.round(parseFloat(mins) / 3) - 1
                console.log('How_many_times_addition = ' + How_many_times_addition)
                Dummy = []
                Dummy_1 = []
                for (var i = 0; i < How_many_times_addition; i++) {
                    Dummy.push(parseFloat(Chart_Nifty_Fin_Service[i + 1][0]), 0)
                    Dummy_1.push(Dummy)
                    Dummy = []
                }
                for (var i = 0; i < Array_5.length; i++) {
                    Dummy_1.push(Array_5[i])
                }
                console.log(Dummy_1)
                Array_5 = []
                Array_5 = Dummy_1
            }
            else if (First_candle_time >= First_Histo_time) {
                Dummy_1 = []
                console.log('start from First_Histo_time')
                console.log('Remove from Histogram')

                var end = moment.unix(parseFloat(Chart_Nifty_Fin_Service[0][0])).format('h:mm')
                var start = moment.unix(Array_5[0][0]).format('h:mm')

                var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
                console.log("mins = ", mins)

                How_many_times_addition = Math.round(parseFloat(mins) / 3) + 1
                console.log('How_many_times_addition = ' + How_many_times_addition)
                for (var i = How_many_times_addition; i < Array_5.length; i++) {
                    Dummy_1.push(Array_5[i])
                }
                Array_5 = []
                Array_5 = Dummy_1
            }

            if (First_candle_time < First_Histo_time_exp_2) {
                console.log('start from First_candle_time')
                console.log('Add to Histogram')

                var start = moment.unix(parseFloat(Chart_Nifty_Fin_Service[0][0])).format('h:mm')
                var end = moment.unix(Array_5_exp_2[0][0]).format('h:mm')

                var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
                console.log("mins = ", mins)

                How_many_times_addition = Math.round(parseFloat(mins) / 3) - 1
                Dummy = []
                Dummy_1 = []
                for (var i = 0; i < How_many_times_addition; i++) {
                    Dummy.push(parseFloat(Chart_Nifty_Fin_Service[i + 1][0]), 0)
                    Dummy_1.push(Dummy)
                    Dummy = []
                }
                for (var i = 0; i < Array_5_exp_2.length; i++) {
                    Dummy_1.push(Array_5_exp_2[i])
                }
                console.log(Dummy_1)
                Array_5_exp_2 = []
                Array_5_exp_2 = Dummy_1
            }
            else if (First_candle_time >= First_Histo_time_exp_2) {
                Dummy_1 = []
                console.log('start from First_Histo_time')
                console.log('Remove from Histogram')

                var end = moment.unix(parseFloat(Chart_Nifty_Fin_Service[0][0])).format('h:mm')
                var start = moment.unix(Array_5_exp_2[0][0]).format('h:mm')

                var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
                console.log("mins = ", mins)

                How_many_times_addition = Math.round(parseFloat(mins) / 3) + 1
                for (var i = How_many_times_addition; i < Array_5_exp_2.length; i++) {
                    Dummy_1.push(Array_5_exp_2[i])
                }
                Array_5_exp_2 = []
                Array_5_exp_2 = Dummy_1
            }

            let Last_candle_time = parseFloat(moment.unix(parseFloat(Chart_Nifty_Fin_Service[Chart_Nifty_Fin_Service.length - 1][0])).format('h.mm'))
            console.log(Last_candle_time)
            let Last_Histo_time = parseFloat(moment.unix(Array_5[Array_5.length - 1][0]).format('h.mm'))
            console.log(Last_Histo_time)
            let Last_Histo_time_exp_2 = parseFloat(moment.unix(Array_5_exp_2[Array_5_exp_2.length - 1][0]).format('h.mm'))
            console.log(Last_Histo_time_exp_2)

            if (Last_candle_time >= Last_Histo_time) {
                console.log(Last_candle_time, Last_Histo_time)
                console.log('Add to Histogram')
                console.log(Last_Histo_time + Last_candle_time)
                
                var end = moment.unix(parseFloat(Chart_Nifty_Fin_Service[Chart_Nifty_Fin_Service.length - 1][0])).format('h:mm')
                var start = moment.unix(Array_5[Array_5.length - 1][0]).format('h:mm')

                var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
                console.log("mins = ", mins)

                How_many_times_addition = Math.round(parseFloat(mins) / 3) + 1
                console.log('How_many_times_addition = ' + How_many_times_addition)
                Dummy = []
                Dummy_1 = []
                sample = []
                sample = Array_5
                len = sample.length + How_many_times_addition - 1
                for (var i = sample.length - 1; i < len; i++) {
                    Dummy.push(parseFloat(sample[i][0]) + 180, 0)
                    sample.push(Dummy)
                    Dummy = []
                    console.log(sample[sample.length - 1])
                }
                Array_5 = sample
            }
            else if (Last_candle_time < Last_Histo_time) {
                Dummy_1 = []
                console.log('start from Last_Histo_time')
                console.log('Remove from Histogram')
                
                var start = moment.unix(parseFloat(Chart_Nifty_Fin_Service[Chart_Nifty_Fin_Service.length - 1][0])).format('h:mm')
                var end = moment.unix(Array_5[Array_5.length - 1][0]).format('h:mm')

                var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
                console.log("mins = ", mins)

                How_many_times_subtraction = Math.round(parseFloat(mins) / 3) - 1
                for (var i = 0; i < How_many_times_subtraction; i++) {
                    Array_5.pop()
                }
            }

            if (Last_candle_time >= Last_Histo_time_exp_2) {
                console.log('start from Last_candle_time')
                console.log('Add to Histogram')

                var end = moment.unix(parseFloat(Chart_Nifty_Fin_Service[Chart_Nifty_Fin_Service.length - 1][0])).format('h:mm')
                var start = moment.unix(Array_5_exp_2[Array_5_exp_2.length - 1][0]).format('h:mm')

                var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
                console.log("mins = ", mins)

                How_many_times_addition = Math.round(parseFloat(mins) / 3) + 1
                Dummy = []
                Dummy_1 = []
                sample = []
                sample = Array_5_exp_2
                len = sample.length + How_many_times_addition - 1
                for (var i = sample.length - 1; i < len; i++) {
                    Dummy.push(parseFloat(sample[i][0]) + 180, 0)
                    sample.push(Dummy)
                    Dummy = []
                }
                Array_5_exp_2 = sample
            }
            else if (Last_candle_time < Last_Histo_time_exp_2) {
                Dummy_1 = []
                console.log('start from Last_Histo_time')
                console.log('Remove from Histogram')

                var start = moment.unix(parseFloat(Chart_Nifty_Fin_Service[Chart_Nifty_Fin_Service.length - 1][0])).format('h:mm')
                var end = moment.unix(Array_5_exp_2[Array_5_exp_2.length - 1][0]).format('h:mm')

                var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
                console.log("mins = ", mins)

                How_many_times_subtraction = Math.round(parseFloat(mins) / 3) - 1
                for (var i = 0; i < How_many_times_subtraction; i++) {
                    Array_5_exp_2.pop()
                }
            }

            // set the allowed units for data grouping
            groupingUnits = [[
                'week',             // unit name
                [1]               // allowed multiples
            ], [
                'month',
                [1, 2, 3, 4, 6]
            ]],

                i = 0;

            for (i; i < dataLength_2; i += 1) {
                // if (i != (dataLength - 1)) {
                ohlc_2.push([
                    parseFloat(Array_5[i][0]), // the date
                    parseFloat(Chart_Nifty_Fin_Service[i][1]), // open
                    parseFloat(Chart_Nifty_Fin_Service[i][2]), // high
                    parseFloat(Chart_Nifty_Fin_Service[i][3]), // low
                    parseFloat(Chart_Nifty_Fin_Service[i][4]) // close
                ]);
                // }
            }
            for (var i = 0; i < Array_5.length; i++) {
                console.log(i)
                Volume_2.push({
                    x: parseFloat(Array_5[i][0]), // the date
                    y: parseFloat(Array_5[i][1]), // the Volume
                    color: VolumeBarColor(parseFloat(Array_5[i][1]))
                });
            }
            for (var i = 0; i < Array_5_exp_2.length; i++) {
                console.log(i)
                Volume_2_exp_2.push({
                    x: parseFloat(Array_5[i][0]), // the date
                    y: parseFloat(Array_5_exp_2[i][1]), // the Volume
                    color: VolumeBarColor(parseFloat(Array_5_exp_2[i][1]))
                });
            }
        }
        highchart.update({
            title: {
                text: 'Nifty Fin Service',
                align: 'left',
                style: {
                    "color": "White",
                    "fontSize": "20px",
                    "fontWeight": "bold",
                    "fontFamily": "Outfit"
                }
            },
            tooltip: {
                split: true,
                formatter: function () {
                    tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                    for (var i = 0; i < this.points.length; i++) {
                        if (i == 0) {
                            if (i == 0) {
                                console.log(this.points[i].y)
                                for (var j = 0; j < ohlc_2.length; j++) {
                                    if (this.points[i].y == ohlc_2[j][4]) {
                                        i = j
                                        tooltipArray.push('Open:' + ohlc_2[i][1] + '<br> High:' + ohlc_2[i][2] + '<br> Low:' + ohlc_2[i][3] + '<br> Close:' + ohlc_2[i][4])
                                        break;
                                    }
                                }
                                i = 0
                            }
                        }
                        else if (i == 1) {
                            tooltipArray.push('Volume:' + this.points[i].y)
                        }
                    }
                    return tooltipArray;
                }
            },
            series: [
                {
                    type: 'candlestick',
                    name: 'AAPL',
                    data: ohlc_2,
                    dataGrouping: {
                        enabled: false,
                        // units: groupingUnits
                    }
                },
                {
                    type: 'column',
                    name: 'Volume',
                    data: Volume_2,
                    yAxis: 1,
                    dataGrouping: {
                        enabled: false,
                        // units: groupingUnits
                    }
                }
            ]
        }),
            chart_2.updateSeries([{
                data: [Bottom_Right_Array_3[1], Bottom_Right_Array_3[2]],
            }])
    })

    // Data for Nifty Bar (For 1st dropdown value)
    if (Bar_Nifty_50_exp_1.length != 0) {
        Array_1 = [];
        Array_2 = [];
        len_1 = Bar_Nifty_50_exp_1.length;
        for (var i = 0; i < len_1; i++) {
            for (var j = 0; j < Bar_Nifty_50_exp_1[0].length; j++) {
                Array_2.push(parseFloat(Bar_Nifty_50_exp_1[i][j]));
                j = j + 1
            }
            Array_1.push(Array_2);
            Array_2 = []
        }
        console.log(Array_1);
    }

    // For Sentiment Dial (Calculation Part)
    if (Array_1.length != 0) {
        Nifty_50_exp_1_A = 0
        Nifty_50_exp_1_B = 0
        Nifty_50_exp_1_Dial = 0
        for (var i = 0; i < Array_1.length; i++) {
            if (Array_1[i][1] > 0) {
                Nifty_50_exp_1_A = Nifty_50_exp_1_A + Array_1[i][1]
            }
            else if (Array_1[i][1] < 0) {
                Nifty_50_exp_1_B = Nifty_50_exp_1_B + Array_1[i][1]
            }
        }
        console.log('Nifty_50_exp_1_A = ', Nifty_50_exp_1_A)
        console.log('Nifty_50_exp_1_B = ', Math.abs(Nifty_50_exp_1_B))
        if (Nifty_50_exp_1_A > Math.abs(Nifty_50_exp_1_B)) {
            Nifty_50_exp_1_Dial = (Nifty_50_exp_1_A) / (Math.abs(Nifty_50_exp_1_B))
            console.log("Nifty_50_exp_1_Dial = ", Nifty_50_exp_1_Dial)
        }
        else if (Nifty_50_exp_1_A < Math.abs(Nifty_50_exp_1_B)) {
            Nifty_50_exp_1_Dial = - (Math.abs(Nifty_50_exp_1_B)) / (Nifty_50_exp_1_A)
            console.log("Nifty_50_exp_1_Dial = ", Nifty_50_exp_1_Dial)
        }

        if (Nifty_50_exp_1_Dial > 0) {
            $('#sentiment_dial_Color').removeClass()
            $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
            $('#sentiment_dial_Arrow').removeClass()
            $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
        }
        else if (Nifty_50_exp_1_Dial < 0) {
            $('#sentiment_dial_Color').removeClass()
            $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
            $('#sentiment_dial_Arrow').removeClass()
            $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
        }
        else if (Nifty_50_exp_1_Dial == 0) {
            $('#sentiment_dial_Color').removeClass()
            $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
            $('#sentiment_dial_Arrow').removeClass()
            $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
        }
    }

    // Data for Nifty Bar (For 2nd dropdown value)
    if (Bar_Nifty_50_exp_2.length != 0) {
        Array_1_exp_2 = [];
        Array_2_exp_2 = [];
        len_1_exp_2 = Bar_Nifty_50_exp_2.length;
        for (var i = 0; i < len_1_exp_2; i++) {
            for (var j = 0; j < Bar_Nifty_50_exp_2[0].length; j++) {
                Array_2_exp_2.push(parseFloat(Bar_Nifty_50_exp_2[i][j]));
                j = j + 1
            }
            Array_1_exp_2.push(Array_2_exp_2);
            Array_2_exp_2 = []
        }
        console.log(Array_1_exp_2);
    }

    // For Sentiment Dial (Calculation Part)
    if (Array_1_exp_2.length != 0) {
        Nifty_50_exp_2_A = 0
        Nifty_50_exp_2_B = 0
        Nifty_50_exp_2_Dial = 0
        for (var i = 0; i < Array_1_exp_2.length; i++) {
            if (Array_1_exp_2[i][1] > 0) {
                Nifty_50_exp_2_A = Nifty_50_exp_2_A + Array_1_exp_2[i][1]
            }
            else if (Array_1_exp_2[i][1] < 0) {
                Nifty_50_exp_2_B = Nifty_50_exp_2_B + Array_1_exp_2[i][1]
            }
        }
        console.log('Nifty_50_exp_2_A = ', Nifty_50_exp_2_A)
        console.log('Nifty_50_exp_2_B = ', Math.abs(Nifty_50_exp_2_B))
        if (Nifty_50_exp_2_A > Math.abs(Nifty_50_exp_2_B)) {
            Nifty_50_exp_2_Dial = (Nifty_50_exp_2_A) / (Math.abs(Nifty_50_exp_2_B))
            console.log("Nifty_50_exp_2_Dial = ", Nifty_50_exp_2_Dial)
        }
        else if (Nifty_50_exp_2_A < Math.abs(Nifty_50_exp_2_B)) {
            Nifty_50_exp_2_Dial = - (Math.abs(Nifty_50_exp_2_B)) / (Nifty_50_exp_2_A)
            console.log("Nifty_50_exp_2_Dial = ", Nifty_50_exp_2_Dial)
        }
    }

    // Data for Nifty Bottom Right Bar (For 1st dropdown value)
    if (Bottom_Right_Bar_Nifty_50_exp_1.length != 0) {
        Bottom_Right_Array_1 = [];
        Bottom_Right_len_1 = Bottom_Right_Bar_Nifty_50_exp_1[0].length;
        for (var i = 0; i < Bottom_Right_len_1; i++) {
            if (i == 1) { i = i + 1 }
            Bottom_Right_Array_1.push(parseFloat(Bottom_Right_Bar_Nifty_50_exp_1[0][i]));
        }
        console.log("Bottom_Right_Array_1 = ",Bottom_Right_Array_1);
    }
    else if(Bottom_Right_Bar_Nifty_50_exp_1.length == 0){
        Bottom_Right_Array_1 = [0,0,0]
    }

    // Data for Nifty Bottom Right Bar (For 2nd dropdown value)
    if (Bottom_Right_Bar_Nifty_50_exp_2.length != 0) {
        Bottom_Right_Array_1_exp_2 = [];
        Bottom_Right_len_1_exp_2 = Bottom_Right_Bar_Nifty_50_exp_2[0].length;
        for (var i = 0; i < Bottom_Right_len_1_exp_2; i++) {
            if (i == 1) { i = i + 1 }
            Bottom_Right_Array_1_exp_2.push(parseFloat(Bottom_Right_Bar_Nifty_50_exp_2[0][i]));
        }
        console.log(Bottom_Right_Array_1_exp_2);
    }
    else if(Bottom_Right_Bar_Nifty_50_exp_2.length == 0){
        Bottom_Right_Array_1_exp_2 = [0,0,0]
    }

    // Data for Nifty_Bank (For 1st dropdown value)
    if (Bar_Nifty_Bank_exp_1.length != 0) {
        Array_3 = [];
        Array_4 = [];
        len_2 = Bar_Nifty_Bank_exp_1.length;
        for (var i = 0; i < len_2; i++) {
            for (var j = 0; j < Bar_Nifty_Bank_exp_1[0].length; j++) {
                Array_4.push(parseFloat(Bar_Nifty_Bank_exp_1[i][j]));
                j = j + 1
            }
            Array_3.push(Array_4);
            Array_4 = []
        }
        console.log(Array_3);
    }

    // For Sentiment Dial (Calculation Part)
    if (Array_3.length != 0) {
        Nifty_Bank_exp_1_A = 0
        Nifty_Bank_exp_1_B = 0
        Nifty_Bank_exp_1_Dial = 0
        for (var i = 0; i < Array_3.length; i++) {
            if (Array_3[i][1] > 0) {
                Nifty_Bank_exp_1_A = Nifty_Bank_exp_1_A + Array_3[i][1]
            }
            else if (Array_3[i][1] < 0) {
                Nifty_Bank_exp_1_B = Nifty_Bank_exp_1_B + Array_3[i][1]
            }
        }
        console.log('Nifty_Bank_exp_1_A = ', Nifty_Bank_exp_1_A)
        console.log('Nifty_Bank_exp_1_B = ', Math.abs(Nifty_Bank_exp_1_B))
        if (Nifty_Bank_exp_1_A > Math.abs(Nifty_Bank_exp_1_B)) {
            Nifty_Bank_exp_1_Dial = (Nifty_Bank_exp_1_A) / (Math.abs(Nifty_Bank_exp_1_B))
            console.log("Nifty_Bank_exp_1_Dial = ", Nifty_Bank_exp_1_Dial)
        }
        else if (Nifty_Bank_exp_1_A < Math.abs(Nifty_Bank_exp_1_B)) {
            Nifty_Bank_exp_1_Dial = - (Math.abs(Nifty_Bank_exp_1_B)) / (Nifty_Bank_exp_1_A)
            console.log("Nifty_Bank_exp_1_Dial = ", Nifty_Bank_exp_1_Dial)
        }
    }

    // Data for Nifty_Bank (For 2nd dropdown value)
    if (Bar_Nifty_Bank_exp_2.length != 0) {
        Array_3_exp_2 = [];
        Array_4_exp_2 = [];
        len_2_exp_2 = Bar_Nifty_Bank_exp_2.length;
        for (var i = 0; i < len_2_exp_2; i++) {
            for (var j = 0; j < Bar_Nifty_Bank_exp_2[0].length; j++) {
                Array_4_exp_2.push(parseFloat(Bar_Nifty_Bank_exp_2[i][j]));
                j = j + 1
            }
            Array_3_exp_2.push(Array_4_exp_2);
            Array_4_exp_2 = []
        }
        console.log(Array_3_exp_2);
    }

    // For Sentiment Dial (Calculation Part)
    if (Array_3_exp_2.length != 0) {
        Nifty_Bank_exp_2_A = 0
        Nifty_Bank_exp_2_B = 0
        Nifty_Bank_exp_2_Dial = 0
        for (var i = 0; i < Array_3_exp_2.length; i++) {
            if (Array_3_exp_2[i][1] > 0) {
                Nifty_Bank_exp_2_A = Nifty_Bank_exp_2_A + Array_3_exp_2[i][1]
            }
            else if (Array_3_exp_2[i][1] < 0) {
                Nifty_Bank_exp_2_B = Nifty_Bank_exp_2_B + Array_3_exp_2[i][1]
            }
        }
        console.log('Nifty_Bank_exp_2_A = ', Nifty_Bank_exp_2_A)
        console.log('Nifty_Bank_exp_2_B = ', Math.abs(Nifty_Bank_exp_2_B))
        if (Nifty_Bank_exp_2_A > Math.abs(Nifty_Bank_exp_2_B)) {
            Nifty_Bank_exp_2_Dial = (Nifty_Bank_exp_2_A) / (Math.abs(Nifty_Bank_exp_2_B))
            console.log("Nifty_Bank_exp_2_Dial = ", Nifty_Bank_exp_2_Dial)
        }
        else if (Nifty_Bank_exp_2_A < Math.abs(Nifty_Bank_exp_2_B)) {
            Nifty_Bank_exp_2_Dial = - (Math.abs(Nifty_Bank_exp_2_B)) / (Nifty_Bank_exp_2_A)
            console.log("Nifty_Bank_exp_2_Dial = ", Nifty_Bank_exp_2_Dial)
        }
    }

    // Data for Nifty_Bank Bottom Right Bar (For 1st dropdown value)
    if (Bottom_Right_Bar_Nifty_Bank_exp_1.length != 0) {
        Bottom_Right_Array_2 = [];
        Bottom_Right_len_2 = Bottom_Right_Bar_Nifty_Bank_exp_1[0].length;
        for (var i = 0; i < Bottom_Right_len_2; i++) {
            if (i == 1) { i = i + 1 }
            Bottom_Right_Array_2.push(parseFloat(Bottom_Right_Bar_Nifty_Bank_exp_1[0][i]));
        }
        console.log(Bottom_Right_Array_2);
    }
    else if(Bottom_Right_Bar_Nifty_Bank_exp_1.length == 0){
        Bottom_Right_Array_2 = [0,0,0]
    }

    // Data for Nifty_Bank Bottom Right Bar (For 2nd dropdown value)
    if (Bottom_Right_Bar_Nifty_Bank_exp_2.length != 0) {
        Bottom_Right_Array_2_exp_2 = [];
        Bottom_Right_len_2_exp_2 = Bottom_Right_Bar_Nifty_Bank_exp_2[0].length;
        for (var i = 0; i < Bottom_Right_len_2_exp_2; i++) {
            if (i == 1) { i = i + 1 }
            Bottom_Right_Array_2_exp_2.push(parseFloat(Bottom_Right_Bar_Nifty_Bank_exp_2[0][i]));
        }
        console.log(Bottom_Right_Array_2_exp_2);
    }
    else if(Bottom_Right_Bar_Nifty_Bank_exp_2.length == 0){
        Bottom_Right_Array_2_exp_2 = [0,0,0]
    }

    // Data for Nifty_Fin_Service Bar (For 1st dropdown value)
    if (Bar_Nifty_Fin_Service_exp_1.length != 0) {
        Array_5 = [];
        Array_6 = [];
        len_3 = Bar_Nifty_Fin_Service_exp_1.length;
        for (var i = 0; i < len_3; i++) {
            for (var j = 0; j < Bar_Nifty_Fin_Service_exp_1[0].length; j++) {
                Array_6.push(parseFloat(Bar_Nifty_Fin_Service_exp_1[i][j]));
                j = j + 1
            }
            Array_5.push(Array_6);
            Array_6 = []
        }
        console.log(Array_5);
    }

    // For Sentiment Dial (Calculation Part)
    if (Array_5.length != 0) {
        Nifty_Fin_Service_exp_1_A = 0
        Nifty_Fin_Service_exp_1_B = 0
        Nifty_Fin_Service_exp_1_Dial = 0
        for (var i = 0; i < Array_5.length; i++) {
            if (Array_5[i][1] > 0) {
                Nifty_Fin_Service_exp_1_A = Nifty_Fin_Service_exp_1_A + Array_5[i][1]
            }
            else if (Array_5[i][1] < 0) {
                Nifty_Fin_Service_exp_1_B = Nifty_Fin_Service_exp_1_B + Array_5[i][1]
            }
        }
        console.log('Nifty_Fin_Service_exp_1_A = ', Nifty_Fin_Service_exp_1_A)
        console.log('Nifty_Fin_Service_exp_1_B = ', Math.abs(Nifty_Fin_Service_exp_1_B))
        if (Nifty_Fin_Service_exp_1_A > Math.abs(Nifty_Fin_Service_exp_1_B)) {
            Nifty_Fin_Service_exp_1_Dial = (Nifty_Fin_Service_exp_1_A) / (Math.abs(Nifty_Fin_Service_exp_1_B))
            console.log("Nifty_Fin_Service_exp_1_Dial = ", Nifty_Fin_Service_exp_1_Dial)
        }
        else if (Nifty_Fin_Service_exp_1_A < Math.abs(Nifty_Fin_Service_exp_1_B)) {
            Nifty_Fin_Service_exp_1_Dial = - (Math.abs(Nifty_Fin_Service_exp_1_B)) / (Nifty_Fin_Service_exp_1_A)
            console.log("Nifty_Fin_Service_exp_1_Dial = ", Nifty_Fin_Service_exp_1_Dial)
        }
    }

    // Data for Nifty_Fin_Service Bar (For 2nd dropdown value)
    if (Bar_Nifty_Fin_Service_exp_2.length != 0) {
        Array_5_exp_2 = [];
        Array_6_exp_2 = [];
        len_3_exp_2 = Bar_Nifty_Fin_Service_exp_2.length;
        for (var i = 0; i < len_3_exp_2; i++) {
            for (var j = 0; j < Bar_Nifty_Fin_Service_exp_2[0].length; j++) {
                Array_6_exp_2.push(parseFloat(Bar_Nifty_Fin_Service_exp_2[i][j]));
                j = j + 1
            }
            Array_5_exp_2.push(Array_6_exp_2);
            Array_6_exp_2 = []
        }
        console.log(Array_5_exp_2);
    }

    // For Sentiment Dial (Calculation Part)
    if (Array_5_exp_2.length != 0) {
        Nifty_Fin_Service_exp_2_A = 0
        Nifty_Fin_Service_exp_2_B = 0
        Nifty_Fin_Service_exp_2_Dial = 0
        for (var i = 0; i < Array_5_exp_2.length; i++) {
            if (Array_5_exp_2[i][1] > 0) {
                Nifty_Fin_Service_exp_2_A = Nifty_Fin_Service_exp_2_A + Array_5_exp_2[i][1]
            }
            else if (Array_5_exp_2[i][1] < 0) {
                Nifty_Fin_Service_exp_2_B = Nifty_Fin_Service_exp_2_B + Array_5_exp_2[i][1]
            }
        }
        console.log('Nifty_Fin_Service_exp_2_A = ', Nifty_Fin_Service_exp_2_A)
        console.log('Nifty_Fin_Service_exp_2_B = ', Math.abs(Nifty_Fin_Service_exp_2_B))
        if (Nifty_Fin_Service_exp_2_A > Math.abs(Nifty_Fin_Service_exp_2_B)) {
            Nifty_Fin_Service_exp_2_Dial = (Nifty_Fin_Service_exp_2_A) / (Math.abs(Nifty_Fin_Service_exp_2_B))
            console.log("Nifty_Fin_Service_exp_2_Dial = ", Nifty_Fin_Service_exp_2_Dial)
        }
        else if (Nifty_Fin_Service_exp_2_A < Math.abs(Nifty_Fin_Service_exp_2_B)) {
            Nifty_Fin_Service_exp_2_Dial = - (Math.abs(Nifty_Fin_Service_exp_2_B)) / (Nifty_Fin_Service_exp_2_A)
            console.log("Nifty_Fin_Service_exp_2_Dial = ", Nifty_Fin_Service_exp_2_Dial)
        }
    }

    // Data for Nifty_Fin_Service Bottom Right Bar (For 1st dropdown value)
    if (Bottom_Right_Bar_Nifty_Fin_Service_exp_1.length != 0) {
        Bottom_Right_Array_3 = [];
        Bottom_Right_len_3 = Bottom_Right_Bar_Nifty_Fin_Service_exp_1[0].length;
        for (var i = 0; i < Bottom_Right_len_3; i++) {
            if (i == 1) { i = i + 1 }
            Bottom_Right_Array_3.push(parseFloat(Bottom_Right_Bar_Nifty_Fin_Service_exp_1[0][i]));
        }
        console.log(Bottom_Right_Array_3);
    }
    else if(Bottom_Right_Bar_Nifty_Fin_Service_exp_1.length == 0){
        Bottom_Right_Array_3 = [0,0,0]
    }

    // Data for Nifty_Fin_Service Bottom Right Bar (For 2nd dropdown value)
    if (Bottom_Right_Bar_Nifty_Fin_Service_exp_2.length != 0) {
        Bottom_Right_Array_3_exp_2 = [];
        Bottom_Right_len_3_exp_2 = Bottom_Right_Bar_Nifty_Fin_Service_exp_2[0].length;
        for (var i = 0; i < Bottom_Right_len_3_exp_2; i++) {
            if (i == 1) { i = i + 1 }
            Bottom_Right_Array_3_exp_2.push(parseFloat(Bottom_Right_Bar_Nifty_Fin_Service_exp_2[0][i]));
        }
        console.log(Bottom_Right_Array_3_exp_2);
    }
    else if(Bottom_Right_Bar_Nifty_Fin_Service_exp_2.length == 0){
        Bottom_Right_Array_3_exp_2 = [0,0,0]
    }


    // Highchart
    function VolumeBarColor(point) {
        if (point > 0) {
            if (compare < point) {
                compare = point
                return '#0DAD8D'
            } else {
                compare = point
                return '#ace0d8'
            }
        }
        else if (point < 0) {
            if (compare < point) {
                compare = point
                return '#e9c0bb'
            } else {
                compare = point
                return '#F15B46'
            }
        }
    }

    // split the data set into ohlc and Volume
    if (Counter_for_Nifty_50_3min == 0) {
        Counter_for_Nifty_50_3min += 1
        ohlc = []
        Volume = []
        Volume_exp_2 = []
        dataLength = Chart_Nifty_50.length
        console.log(dataLength)

        let First_candle_time = parseFloat(moment.unix(parseFloat(Chart_Nifty_50[0][0])).format('h.mm'))
        console.log("First_candle_time = " + First_candle_time)
        let First_Histo_time = parseFloat(moment.unix(Array_1[0][0]).format('h.mm'))
        console.log("First_Histo_time = " + First_Histo_time)
        let First_Histo_time_exp_2 = parseFloat(moment.unix(Array_1_exp_2[0][0]).format('h.mm'))
        console.log("First_Histo_time_exp_2 = " + First_Histo_time_exp_2)

        if (First_candle_time < First_Histo_time) {
            console.log('start from First_candle_time')
            console.log('Add to Histogram')
            console.log((First_Histo_time - First_candle_time))
            var start = moment.unix(parseFloat(Chart_Nifty_50[0][0])).format('h:mm')
            var end = moment.unix(Array_1[0][0]).format('h:mm')

            var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
            console.log("mins = ", mins)

            How_many_times_addition = Math.round(parseFloat(mins) / 3) - 1
            console.log('How_many_times_addition = ' + How_many_times_addition)
            Dummy = []
            Dummy_1 = []
            for (var i = 0; i < How_many_times_addition; i++) {
                console.log("i = ", i)
                Dummy.push(parseFloat(Chart_Nifty_50[i + 1][0]), 0)
                Dummy_1.push(Dummy)
                Dummy = []
                console.log(Dummy_1)
            }
            for (var i = 0; i < Array_1.length; i++) {
                Dummy_1.push(Array_1[i])
            }
            console.log(Dummy_1)
            Array_1 = []
            Array_1 = Dummy_1
        }
        else if (First_candle_time >= First_Histo_time) {
            Dummy_1 = []
            console.log('start from First_Histo_time')
            console.log('Remove from Histogram')
            var end = moment.unix(parseFloat(Chart_Nifty_50[0][0])).format('h:mm')
            var start = moment.unix(Array_1[0][0]).format('h:mm')

            var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
            console.log("mins = ", mins)

            How_many_times_addition = Math.round(parseFloat(mins) / 3) + 1
            console.log('How_many_times_addition = ' + How_many_times_addition)
            for (var i = How_many_times_addition; i < Array_1.length; i++) {
                Dummy_1.push(Array_1[i])
            }
            Array_1 = []
            Array_1 = Dummy_1
            console.log(Array_1)
        }

        if (First_candle_time < First_Histo_time_exp_2) {
            console.log('start from First_candle_time')
            console.log('Add to Histogram')
            var start = moment.unix(parseFloat(Chart_Nifty_50[0][0])).format('h:mm')
            var end = moment.unix(Array_1_exp_2[0][0]).format('h:mm')

            var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
            console.log("mins = ", mins)

            How_many_times_addition = Math.round(parseFloat(mins) / 3) - 1
            Dummy = []
            Dummy_1 = []
            for (var i = 0; i < How_many_times_addition; i++) {
                Dummy.push(parseFloat(Chart_Nifty_50[i + 1][0]), 0)
                Dummy_1.push(Dummy)
                Dummy = []
            }
            for (var i = 0; i < Array_1_exp_2.length; i++) {
                Dummy_1.push(Array_1_exp_2[i])
            }
            console.log(Dummy_1)
            Array_1_exp_2 = []
            Array_1_exp_2 = Dummy_1
        }
        else if (First_candle_time >= First_Histo_time_exp_2) {
            Dummy_1 = []
            console.log('start from First_Histo_time')
            console.log('Remove from Histogram')
            var end = moment.unix(parseFloat(Chart_Nifty_50[0][0])).format('h:mm')
            var start = moment.unix(Array_1_exp_2[0][0]).format('h:mm')

            var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
            console.log("mins = ", mins)

            How_many_times_addition = Math.round(parseFloat(mins) / 3) + 1
            for (var i = How_many_times_addition; i < Array_1_exp_2.length; i++) {
                Dummy_1.push(Array_1_exp_2[i])
            }
            Array_1_exp_2 = []
            Array_1_exp_2 = Dummy_1
        }

        let Last_candle_time = parseFloat(moment.unix(parseFloat(Chart_Nifty_50[Chart_Nifty_50.length - 1][0])).format('h.mm'))
        console.log("Last_candle_time = " + Last_candle_time)
        let Last_Histo_time = parseFloat(moment.unix(Array_1[Array_1.length - 1][0]).format('h.mm'))
        console.log("Last_Histo_time = " + Last_Histo_time)
        let Last_Histo_time_exp_2 = parseFloat(moment.unix(Array_1_exp_2[Array_1_exp_2.length - 1][0]).format('h.mm'))
        console.log("Last_Histo_time_exp_2 = " + Last_Histo_time_exp_2)

        if (Last_candle_time >= Last_Histo_time) {
            console.log(Last_candle_time, Last_Histo_time)
            console.log('Add to Histogram')
            console.log(Last_Histo_time + Last_candle_time)

            var end = moment.unix(parseFloat(Chart_Nifty_50[Chart_Nifty_50.length - 1][0])).format('h:mm')
            var start = moment.unix(Array_1[Array_1.length - 1][0]).format('h:mm')

            var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
            console.log("mins = ", mins)

            How_many_times_addition = Math.round(parseFloat(mins) / 3) + 1
            console.log('How_many_times_addition = ' + How_many_times_addition)
            Dummy = []
            Dummy_1 = []
            sample = []
            sample = Array_1
            len = sample.length + How_many_times_addition - 1
            for (var i = sample.length - 1; i < len; i++) {
                Dummy.push(parseFloat(sample[i][0]) + 180, 0)
                sample.push(Dummy)
                Dummy = []
                console.log(sample[sample.length - 1])
            }
            Array_1 = sample
            console.log(Array_1)
        }
        else if (Last_candle_time < Last_Histo_time) {
            Dummy_1 = []
            console.log('start from Last_Histo_time')
            console.log('Remove from Histogram')
            console.log("Last_candle_time = " + Last_candle_time)
            console.log("Last_Histo_time = " + Last_Histo_time)

            var start = moment.unix(parseFloat(Chart_Nifty_50[Chart_Nifty_50.length - 1][0])).format('h:mm')
            var end = moment.unix(Array_1[Array_1.length - 1][0]).format('h:mm')

            var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
            console.log("mins = ", mins)

            How_many_times_subtraction = Math.round((parseFloat(mins)) / 3) - 1
            console.log("How_many_times_subtraction = " + How_many_times_subtraction)
            for (var i = 0; i < How_many_times_subtraction; i++) {
                Array_1.pop()
                console.log(Array_1)
            }
        }

        if (Last_candle_time >= Last_Histo_time_exp_2) {
            console.log('start from Last_candle_time')
            console.log('Add to Histogram')

            var end = moment.unix(parseFloat(Chart_Nifty_50[Chart_Nifty_50.length - 1][0])).format('h:mm')
            var start = moment.unix(Array_1_exp_2[Array_1_exp_2.length - 1][0]).format('h:mm')

            var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
            console.log("mins = ", mins)

            How_many_times_addition = Math.round(parseFloat(mins) / 3) + 1
            Dummy = []
            Dummy_1 = []
            sample = []
            sample = Array_1_exp_2
            len = sample.length + How_many_times_addition - 1
            for (var i = sample.length - 1; i < len; i++) {
                Dummy.push(parseFloat(sample[i][0]) + 180, 0)
                sample.push(Dummy)
                Dummy = []
            }
            Array_1_exp_2 = sample
        }
        else if (Last_candle_time < Last_Histo_time_exp_2) {
            Dummy_1 = []
            console.log('start from Last_Histo_time')
            console.log('Remove from Histogram')

            var start = moment.unix(parseFloat(Chart_Nifty_50[Chart_Nifty_50.length - 1][0])).format('h:mm')
            var end = moment.unix(Array_1_exp_2[Array_1_exp_2.length - 1][0]).format('h:mm')

            var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
            console.log("mins = ", mins)

            How_many_times_subtraction = Math.round(parseFloat(mins) / 3) - 1
            console.log("How_many_times_subtraction = " + How_many_times_subtraction)
            for (var i = 0; i < How_many_times_subtraction; i++) {
                Array_1_exp_2.pop()
            }
        }




        // set the allowed units for data grouping
        groupingUnits = [[
            'week',             // unit name
            [1]               // allowed multiples
        ], [
            'month',
            [1, 2, 3, 4, 6]
        ]],

            i = 0;

        for (i; i < dataLength; i += 1) {
            console.log(i)
            // if (i != (dataLength - 1)) {
            ohlc.push([
                parseFloat(Array_1[i][0]), // the date
                parseFloat(Chart_Nifty_50[i][1]), // open
                parseFloat(Chart_Nifty_50[i][2]), // high
                parseFloat(Chart_Nifty_50[i][3]), // low
                parseFloat(Chart_Nifty_50[i][4]) // close
            ]);
            // }
        }
        for (var i = 0; i < Array_1.length; i++) {
            // console.log(i)
            Volume.push({
                x: parseFloat(Array_1[i][0]), // the date
                y: parseFloat(Array_1[i][1]), // the Volume
                color: VolumeBarColor(parseFloat(Array_1[i][1]))
            });
        }
        for (var i = 0; i < Array_1_exp_2.length; i++) {
            // console.log(i)
            Volume_exp_2.push({
                x: parseFloat(Array_1[i][0]), // the date
                y: parseFloat(Array_1_exp_2[i][1]), // the Volume
                color: VolumeBarColor(parseFloat(Array_1_exp_2[i][1]))
            });
        }
    }


    // create the chart
    const highchart = Highcharts.stockChart('chart', {

        rangeSelector: {
            enabled: false
        },
        navigator: {
            enabled: false
        },
        scrollbar: {
            enabled: false
        },
        legend: {
            itemStyle: {
                color: '#000000',
                fontWeight: 'bold'
            }
        },
        plotOptions: {
            candlestick: {
                color: 'red',
                upColor: 'green'
            },
            Volume: {
                color: 'red',
                upColor: 'green'
            }
        },

        title: {
            text: 'Nifty 50',
            align: 'left',
            style: {
                "color": "White",
                "fontSize": "20px",
                "fontWeight": "bold",
                "fontFamily": "Outfit"
            }
        },
        chart: {
            backgroundColor: '#1c1c1c',
        },

        toolbar: {
            enabled: false
        },
        yAxis: [
            {
                labels:
                {
                    formatter: function () {
                        return '';
                    }
                },
                height: '60%',
                lineWidth: 0,
                gridLineWidth: 0,
                resize: {
                    enabled: true
                }
            },
            {
                labels: {
                    formatter: function () {
                        return '';
                    }
                },
                top: '65%',
                height: '35%',
                offset: 0,
                lineWidth: 0,
                gridLineWidth: 0,
            }
        ],
        tooltip: {
            split: true,
            formatter: function () {
                tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                for (var i = 0; i < this.points.length; i++) {
                    if (i == 0) {
                        console.log(this.points[i].y)
                        for (var j = 0; j < ohlc.length; j++) {
                            if (this.points[i].y == ohlc[j][4]) {
                                i = j
                                tooltipArray.push('Open:' + ohlc[i][1] + '<br> High:' + ohlc[i][2] + '<br> Low:' + ohlc[i][3] + '<br> Close:' + ohlc[i][4])
                                break;
                            }
                        }
                        i = 0
                    }
                    else if (i == 1) {
                        tooltipArray.push('Volume:' + this.points[i].y)
                    }
                }
                return tooltipArray;
            }
        },
        xAxis: {
            type: 'datetime',
            labels: {
                formatter: function () {
                    return moment.unix(this.value).format('h:mm a');
                },
            }
        },
        series: [
            {
                type: 'candlestick',
                name: 'AAPL',
                data: ohlc,
                dataGrouping: {
                    enabled: false,
                    // units: groupingUnits
                }
            },
            {
                type: 'column',
                name: 'Volume',
                data: Volume,
                yAxis: 1,
                dataGrouping: {
                    enabled: false,
                    // units: groupingUnits
                }
            }
        ]
    });

    // Apexchart Bar [Bottom Right Chart] 
    var options = {
        series: [{
            name: 'Cash Flow',
            data: [Bottom_Right_Array_1[1], Bottom_Right_Array_1[2]],
        }],
        chart: {
            type: 'bar',
            height: 250,
            width: 250,
            toolbar: {
                show: false
            }
        },
        grid: {
            show: false
        },
        plotOptions: {
            bar: {
                colors: {
                    ranges: [{
                        from: -10000,
                        to: 0,
                        color: '#F15B46'
                    }, {
                        from: 0,
                        to: 10000,
                        color: 'rgb(130, 236, 130)'
                    }]
                },
                columnWidth: '80%',
            }
        },
        dataLabels: {
            enabled: false,
        },
        yaxis: {
            opposite: true,
            labels: {
                formatter: function (y) {
                    return y.toFixed(0) + "%";
                }
            }
        },
        xaxis: {
            // type: 'datetime',
            categories: ['CE_change', 'PE_change'],
            labels: {
                rotate: -90
            }
        },
        responsive: [
            {
                breakpoint: 919,
                options: {
                    chart: {
                        width: 200,
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false
                        }
                    },
                    legend: {
                        position: "bottom"
                    }
                }
            },
            {
                breakpoint: 768,
                options: {
                    chart: {
                        width: 250,
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false
                        }
                    },
                    legend: {
                        position: "bottom"
                    }
                }
            },
        ]
    };

    var chart_2 = new ApexCharts(document.querySelector("#chart_2"), options);
    chart_2.render();


    // Screen Sizing

    if ($(window).width() < 1115 && $(window).width() > 750) {
        $('.speedometerWrapper-G5piCoZi').removeClass('G5piCoZi').addClass('small-G5piCoZi')
    }
    else if ($(window).width() < 750 && $(window).width() > 370) {
        $('.speedometerWrapper-G5piCoZi').removeClass('small-G5piCoZi').addClass('large-G5piCoZi')
    }
    else if ($(window).width() < 370) {
        $('.speedometerWrapper-G5piCoZi').removeClass('large-G5piCoZi').addClass('small-G5piCoZi')
    }

    $(window).resize(function () {
        if ($(window).width() < 1115 && $(window).width() > 750) {
            $('.speedometerWrapper-G5piCoZi').removeClass('G5piCoZi').addClass('small-G5piCoZi')
        }
        else if ($(window).width() < 750 && $(window).width() > 370) {
            $('.speedometerWrapper-G5piCoZi').removeClass('small-G5piCoZi').addClass('large-G5piCoZi')
        }
        else if ($(window).width() < 370) {
            $('.speedometerWrapper-G5piCoZi').removeClass('large-G5piCoZi').addClass('small-G5piCoZi')
        }
    })





    $("#Expiry").change(function () {
        var x = $("#Expiry").prop('selectedIndex');
        var y = $("#Time_Frame").prop('selectedIndex');
        console.log(x, y)
        if ($('#nifty_btn').hasClass('gb_active') && x == 1 && y == 0) {
            let compare = 0;
            console.log('u r on nifty_50 2nd expiry')
            if (Nifty_50_exp_2_Dial > 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
            }
            else if (Nifty_50_exp_2_Dial < 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
            }
            else if (Nifty_50_exp_2_Dial == 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
            }

            if (Dial_Nifty_50_exp_2.length != 0) {
                if (parseFloat(Dial_Nifty_50_exp_2[0][2]) > 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_50_exp_2[0][2]) < 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_50_exp_2[0][2]) == 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
                }
            }
            highchart.update({
                title: {
                    text: 'Nifty 50',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < ohlc.length; j++) {
                                        if (this.points[i].y == ohlc[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + ohlc[i][1] + '<br> High:' + ohlc[i][2] + '<br> Low:' + ohlc[i][3] + '<br> Close:' + ohlc[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: ohlc,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume_exp_2,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            }),
                chart_2.updateSeries([{
                    data: [Bottom_Right_Array_1_exp_2[1], Bottom_Right_Array_1_exp_2[2]],
                }])
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 1 && y == 0) {
            let compare = 0;
            console.log('u r on nifty_bank 2nd expiry')
            if (Nifty_Bank_exp_2_Dial > 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
            }
            else if (Nifty_Bank_exp_2_Dial < 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
            }
            else if (Nifty_Bank_exp_2_Dial == 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
            }

            if (Dial_Nifty_Bank_exp_2.length != 0) {
                if (parseFloat(Dial_Nifty_Bank_exp_2[0][2]) > 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Bank_exp_2[0][2]) < 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Bank_exp_2[0][2]) == 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
                }
            }
            highchart.update({
                title: {
                    text: 'Nifty Bank',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < ohlc_1.length; j++) {
                                        if (this.points[i].y == ohlc_1[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + ohlc_1[i][1] + '<br> High:' + ohlc_1[i][2] + '<br> Low:' + ohlc_1[i][3] + '<br> Close:' + ohlc_1[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: ohlc_1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume_1_exp_2,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            }),
                chart_2.updateSeries([{
                    data: [Bottom_Right_Array_2_exp_2[1], Bottom_Right_Array_2_exp_2[2]],
                }])
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 1 && y == 0) {
            let compare = 0;
            console.log('u r on nifty_fin_service 2nd expiry')
            if (Nifty_Fin_Service_exp_2_Dial > 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
            }
            else if (Nifty_Fin_Service_exp_2_Dial < 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
            }
            else if (Nifty_Fin_Service_exp_2_Dial == 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
            }

            if (Dial_Nifty_Fin_Service_exp_2.length != 0) {
                if (parseFloat(Dial_Nifty_Fin_Service_exp_2[0][2]) > 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Fin_Service_exp_2[0][2]) < 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Fin_Service_exp_2[0][2]) == 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
                }
            }
            highchart.update({
                title: {
                    text: 'Nifty Fin Service',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < ohlc_2.length; j++) {
                                        if (this.points[i].y == ohlc_2[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + ohlc_2[i][1] + '<br> High:' + ohlc_2[i][2] + '<br> Low:' + ohlc_2[i][3] + '<br> Close:' + ohlc_2[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: ohlc_2,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume_2_exp_2,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            }),
                chart_2.updateSeries([{
                    data: [Bottom_Right_Array_3_exp_2[1], Bottom_Right_Array_3_exp_2[2]],
                }])
        }
        else if ($('#nifty_btn').hasClass('gb_active') && x == 0 && y == 0) {
            let compare = 0;
            console.log('u r on nifty_50 1st expiry')
            if (Nifty_50_exp_1_Dial > 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
            }
            else if (Nifty_50_exp_1_Dial < 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
            }
            else if (Nifty_50_exp_1_Dial == 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
            }

            if (Dial_Nifty_50_exp_1.length != 0) {
                if (parseFloat(Dial_Nifty_50_exp_1[0][2]) > 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_50_exp_1[0][2]) < 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_50_exp_1[0][2]) == 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
                }
            }

            highchart.update({
                title: {
                    text: 'Nifty 50',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < ohlc.length; j++) {
                                        if (this.points[i].y == ohlc[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + ohlc[i][1] + '<br> High:' + ohlc[i][2] + '<br> Low:' + ohlc[i][3] + '<br> Close:' + ohlc[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: ohlc,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            }),
                chart_2.updateSeries([{
                    data: [Bottom_Right_Array_1[1], Bottom_Right_Array_1[2]],
                }])
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 0 && y == 0) {
            let compare = 0;
            console.log('u r on nifty_bank 1st expiry')
            if (Nifty_Bank_exp_1_Dial > 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
            }
            else if (Nifty_Bank_exp_1_Dial < 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
            }
            else if (Nifty_Bank_exp_1_Dial == 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
            }

            if (Dial_Nifty_Bank_exp_2.length != 0) {
                if (parseFloat(Dial_Nifty_Bank_exp_1[0][2]) > 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Bank_exp_1[0][2]) < 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Bank_exp_1[0][2]) == 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
                }
            }
            highchart.update({
                title: {
                    text: 'Nifty Bank',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < ohlc_1.length; j++) {
                                        if (this.points[i].y == ohlc_1[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + ohlc_1[i][1] + '<br> High:' + ohlc_1[i][2] + '<br> Low:' + ohlc_1[i][3] + '<br> Close:' + ohlc_1[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: ohlc_1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume_1,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            }),
                chart_2.updateSeries([{
                    data: [Bottom_Right_Array_2[1], Bottom_Right_Array_2[2]],
                }])
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 0 && y == 0) {
            let compare = 0;
            console.log('u r on nifty_fin_service 1st expiry')
            if (Nifty_Fin_Service_exp_1_Dial > 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
            }
            else if (Nifty_Fin_Service_exp_1_Dial < 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
            }
            else if (Nifty_Fin_Service_exp_1_Dial == 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
            }

            if (Dial_Nifty_Fin_Service_exp_2.length != 0) {
                if (parseFloat(Dial_Nifty_Fin_Service_exp_1[0][2]) > 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Fin_Service_exp_1[0][2]) < 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Fin_Service_exp_1[0][2]) == 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
                }
            }
            highchart.update({
                title: {
                    text: 'Nifty Fin Service',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < ohlc_2.length; j++) {
                                        if (this.points[i].y == ohlc_2[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + ohlc_2[i][1] + '<br> High:' + ohlc_2[i][2] + '<br> Low:' + ohlc_2[i][3] + '<br> Close:' + ohlc_2[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: ohlc_2,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume_2,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            }),
                chart_2.updateSeries([{
                    data: [Bottom_Right_Array_3[1], Bottom_Right_Array_3[2]],
                }])
        }
        if ($('#nifty_btn').hasClass('gb_active') && x == 1 && y == 1) {
            let compare = 0;
            console.log('u r on nifty_50 2nd expiry')
            if (Nifty_50_exp_2_Dial > 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
            }
            else if (Nifty_50_exp_2_Dial < 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
            }
            else if (Nifty_50_exp_2_Dial == 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
            }

            if (Dial_Nifty_50_exp_2.length != 0) {
                if (parseFloat(Dial_Nifty_50_exp_2[0][2]) > 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_50_exp_2[0][2]) < 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_50_exp_2[0][2]) == 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
                }
            }
            Volume_exp_2_15min = []
            for (var i = 0; i < Array_1_exp_2.length; i++) {
                Volume_exp_2_15min.push({
                    x: parseFloat(Array_1_exp_2[i][0]), // the date
                    y: parseFloat(Array_1_exp_2[i][1]), // the Volume
                    color: VolumeBarColor(parseFloat(Array_1_exp_2[i][1]))
                })
                i = i + 4
            }
            console.log(Volume_exp_2_15min)
            highchart.update({
                title: {
                    text: 'Nifty 50',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_50_15min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_50_15min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_50_15min[i][1] + '<br> High:' + Chart_Nifty_50_15min[i][2] + '<br> Low:' + Chart_Nifty_50_15min[i][3] + '<br> Close:' + Chart_Nifty_50_15min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: Chart_Nifty_50_15min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume_exp_2_15min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            }),
                chart_2.updateSeries([{
                    data: [Bottom_Right_Array_1_exp_2[1], Bottom_Right_Array_1_exp_2[2]],
                }])
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 1 && y == 1) {
            let compare = 0;
            console.log('u r on nifty_bank 2nd expiry')
            if (Nifty_Bank_exp_2_Dial > 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
            }
            else if (Nifty_Bank_exp_2_Dial < 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
            }
            else if (Nifty_Bank_exp_2_Dial == 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
            }

            if (Dial_Nifty_Bank_exp_2.length != 0) {
                if (parseFloat(Dial_Nifty_Bank_exp_2[0][2]) > 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Bank_exp_2[0][2]) < 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Bank_exp_2[0][2]) == 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
                }
            }

            Volume_1_exp_2_15min = []
            for (var i = 0; i < Array_3_exp_2.length; i++) {
                Volume_1_exp_2_15min.push({
                    x: parseFloat(Array_3_exp_2[i][0]), // the date
                    y: parseFloat(Array_3_exp_2[i][1]), // the Volume
                    color: VolumeBarColor(parseFloat(Array_3_exp_2[i][1]))
                })
                i = i + 4
            }
            console.log(Volume_1_exp_2_15min)
            highchart.update({
                title: {
                    text: 'Nifty Bank',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_Bank_15min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_Bank_15min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_Bank_15min[i][1] + '<br> High:' + Chart_Nifty_Bank_15min[i][2] + '<br> Low:' + Chart_Nifty_Bank_15min[i][3] + '<br> Close:' + Chart_Nifty_Bank_15min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: Chart_Nifty_Bank_15min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume_1_exp_2_15min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            }),
                chart_2.updateSeries([{
                    data: [Bottom_Right_Array_2_exp_2[1], Bottom_Right_Array_2_exp_2[2]],
                }])
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 1 && y == 1) {
            let compare = 0;
            console.log('u r on nifty_fin_service 2nd expiry')
            if (Nifty_Fin_Service_exp_2_Dial > 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
            }
            else if (Nifty_Fin_Service_exp_2_Dial < 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
            }
            else if (Nifty_Fin_Service_exp_2_Dial == 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
            }

            if (Dial_Nifty_Fin_Service_exp_2.length != 0) {
                if (parseFloat(Dial_Nifty_Fin_Service_exp_2[0][2]) > 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Fin_Service_exp_2[0][2]) < 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Fin_Service_exp_2[0][2]) == 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
                }
            }
            Volume_2_exp_2_15min = []
            for (var i = 0; i < Array_5_exp_2.length; i++) {
                Volume_2_exp_2_15min.push({
                    x: parseFloat(Array_5_exp_2[i][0]), // the date
                    y: parseFloat(Array_5_exp_2[i][1]), // the Volume
                    color: VolumeBarColor(parseFloat(Array_5_exp_2[i][1]))
                })
                i = i + 4
            }
            console.log(Volume_2_exp_2_15min)
            highchart.update({
                title: {
                    text: 'Nifty Fin Service',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_Fin_Service_15min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_Fin_Service_15min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_Fin_Service_15min[i][1] + '<br> High:' + Chart_Nifty_Fin_Service_15min[i][2] + '<br> Low:' + Chart_Nifty_Fin_Service_15min[i][3] + '<br> Close:' + Chart_Nifty_Fin_Service_15min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: Chart_Nifty_Fin_Service_15min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume_2_exp_2_15min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            }),
                chart_2.updateSeries([{
                    data: [Bottom_Right_Array_3_exp_2[1], Bottom_Right_Array_3_exp_2[2]],
                }])
        }
        else if ($('#nifty_btn').hasClass('gb_active') && x == 0 && y == 1) {
            let compare = 0;
            console.log('u r on nifty_50 1st expiry')
            if (Nifty_50_exp_1_Dial > 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
            }
            else if (Nifty_50_exp_1_Dial < 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
            }
            else if (Nifty_50_exp_1_Dial == 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
            }

            if (Dial_Nifty_50_exp_1.length != 0) {
                if (parseFloat(Dial_Nifty_50_exp_1[0][2]) > 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_50_exp_1[0][2]) < 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_50_exp_1[0][2]) == 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
                }
            }

            Volume_15min = []
            console.log("Array_1 = "+ Array_1)
            for (var i = 0; i < Array_1.length; i++) {
                Volume_15min.push({
                    x: parseFloat(Array_1[i][0]), // the date
                    y: parseFloat(Array_1[i][1]), // the Volume
                    color: VolumeBarColor(parseFloat(Array_1[i][1]))
                })
                i = i + 4
            }
            console.log(Volume_15min)
            highchart.update({
                title: {
                    text: 'Nifty 50',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_50_15min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_50_15min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_50_15min[i][1] + '<br> High:' + Chart_Nifty_50_15min[i][2] + '<br> Low:' + Chart_Nifty_50_15min[i][3] + '<br> Close:' + Chart_Nifty_50_15min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: Chart_Nifty_50_15min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume_15min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            }),
                chart_2.updateSeries([{
                    data: [Bottom_Right_Array_1[1], Bottom_Right_Array_1[2]],
                }])
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 0 && y == 1) {
            let compare = 0;
            console.log('u r on nifty_bank 1st expiry')
            if (Nifty_Bank_exp_1_Dial > 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
            }
            else if (Nifty_Bank_exp_1_Dial < 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
            }
            else if (Nifty_Bank_exp_1_Dial == 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
            }

            if (Dial_Nifty_Bank_exp_2.length != 0) {
                if (parseFloat(Dial_Nifty_Bank_exp_1[0][2]) > 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Bank_exp_1[0][2]) < 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Bank_exp_1[0][2]) == 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
                }
            }

            Volume_1_15min = []
            for (var i = 0; i < Array_3.length; i++) {
                Volume_1_15min.push({
                    x: parseFloat(Array_3[i][0]), // the date
                    y: parseFloat(Array_3[i][1]), // the Volume
                    color: VolumeBarColor(parseFloat(Array_3[i][1]))
                })
                i = i + 4
            }
            console.log(Volume_1_15min)
            highchart.update({
                title: {
                    text: 'Nifty Bank',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_Bank_15min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_Bank_15min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_Bank_15min[i][1] + '<br> High:' + Chart_Nifty_Bank_15min[i][2] + '<br> Low:' + Chart_Nifty_Bank_15min[i][3] + '<br> Close:' + Chart_Nifty_Bank_15min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: Chart_Nifty_Bank_15min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume_1_15min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            }),
                chart_2.updateSeries([{
                    data: [Bottom_Right_Array_2[1], Bottom_Right_Array_2[2]],
                }])
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 0 && y == 1) {
            let compare = 0;
            console.log('u r on nifty_fin_service 1st expiry')
            if (Nifty_Fin_Service_exp_1_Dial > 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
            }
            else if (Nifty_Fin_Service_exp_1_Dial < 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
            }
            else if (Nifty_Fin_Service_exp_1_Dial == 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
            }

            if (Dial_Nifty_Fin_Service_exp_2.length != 0) {
                if (parseFloat(Dial_Nifty_Fin_Service_exp_1[0][2]) > 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Fin_Service_exp_1[0][2]) < 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Fin_Service_exp_1[0][2]) == 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
                }
            }

            Volume_2_15min = []
            for (var i = 0; i < Array_5.length; i++) {
                Volume_2_15min.push({
                    x: parseFloat(Array_5[i][0]), // the date
                    y: parseFloat(Array_5[i][1]), // the Volume
                    color: VolumeBarColor(parseFloat(Array_5[i][1]))
                })
                i = i + 4
            }
            console.log(Volume_2_15min)
            highchart.update({
                title: {
                    text: 'Nifty Fin Service',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_Fin_Service_15min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_Fin_Service_15min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_Fin_Service_15min[i][1] + '<br> High:' + Chart_Nifty_Fin_Service_15min[i][2] + '<br> Low:' + Chart_Nifty_Fin_Service_15min[i][3] + '<br> Close:' + Chart_Nifty_Fin_Service_15min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: Chart_Nifty_Fin_Service_15min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume_2_15min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            }),
                chart_2.updateSeries([{
                    data: [Bottom_Right_Array_3[1], Bottom_Right_Array_3[2]],
                }])
        }
        if ($('#nifty_btn').hasClass('gb_active') && x == 1 && y == 2) {
            let compare = 0;
            console.log('u r on nifty_50 2nd expiry')
            if (Nifty_50_exp_2_Dial > 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
            }
            else if (Nifty_50_exp_2_Dial < 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
            }
            else if (Nifty_50_exp_2_Dial == 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
            }

            if (Dial_Nifty_50_exp_2.length != 0) {
                if (parseFloat(Dial_Nifty_50_exp_2[0][2]) > 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_50_exp_2[0][2]) < 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_50_exp_2[0][2]) == 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
                }
            }
            Volume_exp_2_30min = []
            for (var i = 0; i < Array_1_exp_2.length; i++) {
                Volume_exp_2_30min.push({
                    x: parseFloat(Array_1_exp_2[i][0]), // the date
                    y: parseFloat(Array_1_exp_2[i][1]), // the Volume
                    color: VolumeBarColor(parseFloat(Array_1_exp_2[i][1]))
                })
                i = i + 9
            }
            highchart.update({
                title: {
                    text: 'Nifty 50',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_50_30min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_50_30min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_50_30min[i][1] + '<br> High:' + Chart_Nifty_50_30min[i][2] + '<br> Low:' + Chart_Nifty_50_30min[i][3] + '<br> Close:' + Chart_Nifty_50_30min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: Chart_Nifty_50_30min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume_exp_2_30min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            }),
                chart_2.updateSeries([{
                    data: [Bottom_Right_Array_1_exp_2[1], Bottom_Right_Array_1_exp_2[2]],
                }])
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 1 && y == 2) {
            let compare = 0;
            console.log('u r on nifty_bank 2nd expiry')
            if (Nifty_Bank_exp_2_Dial > 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
            }
            else if (Nifty_Bank_exp_2_Dial < 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
            }
            else if (Nifty_Bank_exp_2_Dial == 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
            }

            if (Dial_Nifty_Bank_exp_2.length != 0) {
                if (parseFloat(Dial_Nifty_Bank_exp_2[0][2]) > 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Bank_exp_2[0][2]) < 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Bank_exp_2[0][2]) == 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
                }
            }
            Volume_1_exp_2_30min = []
            for (var i = 0; i < Array_3_exp_2.length; i++) {
                Volume_1_exp_2_30min.push({
                    x: parseFloat(Array_3_exp_2[i][0]), // the date
                    y: parseFloat(Array_3_exp_2[i][1]), // the Volume
                    color: VolumeBarColor(parseFloat(Array_3_exp_2[i][1]))
                })
                i = i + 9
            }
            highchart.update({
                title: {
                    text: 'Nifty Bank',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_Bank_30min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_Bank_30min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_Bank_30min[i][1] + '<br> High:' + Chart_Nifty_Bank_30min[i][2] + '<br> Low:' + Chart_Nifty_Bank_30min[i][3] + '<br> Close:' + Chart_Nifty_Bank_30min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: Chart_Nifty_Bank_30min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume_1_exp_2_30min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            }),
                chart_2.updateSeries([{
                    data: [Bottom_Right_Array_2_exp_2[1], Bottom_Right_Array_2_exp_2[2]],
                }])
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 1 && y == 2) {
            let compare = 0;
            console.log('u r on nifty_fin_service 2nd expiry')
            if (Nifty_Fin_Service_exp_2_Dial > 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
            }
            else if (Nifty_Fin_Service_exp_2_Dial < 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
            }
            else if (Nifty_Fin_Service_exp_2_Dial == 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
            }

            if (Dial_Nifty_Fin_Service_exp_2.length != 0) {
                if (parseFloat(Dial_Nifty_Fin_Service_exp_2[0][2]) > 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Fin_Service_exp_2[0][2]) < 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Fin_Service_exp_2[0][2]) == 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
                }
            }
            Volume_2_exp_2_30min = []
            for (var i = 0; i < Array_5_exp_2.length; i++) {
                Volume_2_exp_2_30min.push({
                    x: parseFloat(Array_5_exp_2[i][0]), // the date
                    y: parseFloat(Array_5_exp_2[i][1]), // the Volume
                    color: VolumeBarColor(parseFloat(Array_5_exp_2[i][1]))
                })
                i = i + 9
            }
            highchart.update({
                title: {
                    text: 'Nifty Fin Service',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_Fin_Service_30min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_Fin_Service_30min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_Fin_Service_30min[i][1] + '<br> High:' + Chart_Nifty_Fin_Service_30min[i][2] + '<br> Low:' + Chart_Nifty_Fin_Service_30min[i][3] + '<br> Close:' + Chart_Nifty_Fin_Service_30min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: Chart_Nifty_Fin_Service_30min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume_2_exp_2_30min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            }),
                chart_2.updateSeries([{
                    data: [Bottom_Right_Array_3_exp_2[1], Bottom_Right_Array_3_exp_2[2]],
                }])
        }
        else if ($('#nifty_btn').hasClass('gb_active') && x == 0 && y == 2) {
            let compare = 0;
            console.log('u r on nifty_50 1st expiry')
            if (Nifty_50_exp_1_Dial > 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
            }
            else if (Nifty_50_exp_1_Dial < 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
            }
            else if (Nifty_50_exp_1_Dial == 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
            }

            if (Dial_Nifty_50_exp_1.length != 0) {
                if (parseFloat(Dial_Nifty_50_exp_1[0][2]) > 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_50_exp_1[0][2]) < 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_50_exp_1[0][2]) == 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
                }
            }
            Volume_30min = []
            for (var i = 0; i < Array_1.length; i++) {
                Volume_30min.push({
                    x: parseFloat(Array_1[i][0]), // the date
                    y: parseFloat(Array_1[i][1]), // the Volume
                    color: VolumeBarColor(parseFloat(Array_1[i][1]))
                })
                i = i + 9
            }
            highchart.update({
                title: {
                    text: 'Nifty 50',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_50_30min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_50_30min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_50_30min[i][1] + '<br> High:' + Chart_Nifty_50_30min[i][2] + '<br> Low:' + Chart_Nifty_50_30min[i][3] + '<br> Close:' + Chart_Nifty_50_30min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: Chart_Nifty_50_30min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume_30min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            }),
                chart_2.updateSeries([{
                    data: [Bottom_Right_Array_1[1], Bottom_Right_Array_1[2]],
                }])
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 0 && y == 2) {
            let compare = 0;
            console.log('u r on nifty_bank 1st expiry')
            if (Nifty_Bank_exp_1_Dial > 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
            }
            else if (Nifty_Bank_exp_1_Dial < 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
            }
            else if (Nifty_Bank_exp_1_Dial == 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
            }

            if (Dial_Nifty_Bank_exp_2.length != 0) {
                if (parseFloat(Dial_Nifty_Bank_exp_1[0][2]) > 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Bank_exp_1[0][2]) < 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Bank_exp_1[0][2]) == 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
                }
            }
            Volume_1_30min = []
            for (var i = 0; i < Array_3.length; i++) {
                Volume_1_30min.push({
                    x: parseFloat(Array_3[i][0]), // the date
                    y: parseFloat(Array_3[i][1]), // the Volume
                    color: VolumeBarColor(parseFloat(Array_3[i][1]))
                })
                i = i + 9
            }
            highchart.update({
                title: {
                    text: 'Nifty Bank',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_Bank_30min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_Bank_30min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_Bank_30min[i][1] + '<br> High:' + Chart_Nifty_Bank_30min[i][2] + '<br> Low:' + Chart_Nifty_Bank_30min[i][3] + '<br> Close:' + Chart_Nifty_Bank_30min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: Chart_Nifty_Bank_30min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume_1_30min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            }),
                chart_2.updateSeries([{
                    data: [Bottom_Right_Array_2[1], Bottom_Right_Array_2[2]],
                }])
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 0 && y == 2) {
            let compare = 0;
            console.log('u r on nifty_fin_service 1st expiry')
            if (Nifty_Fin_Service_exp_1_Dial > 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
            }
            else if (Nifty_Fin_Service_exp_1_Dial < 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
            }
            else if (Nifty_Fin_Service_exp_1_Dial == 0) {
                $('#sentiment_dial_Color').removeClass()
                $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                $('#sentiment_dial_Arrow').removeClass()
                $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
            }

            if (Dial_Nifty_Fin_Service_exp_2.length != 0) {
                if (parseFloat(Dial_Nifty_Fin_Service_exp_1[0][2]) > 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Fin_Service_exp_1[0][2]) < 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
                }
                else if (parseFloat(Dial_Nifty_Fin_Service_exp_1[0][2]) == 0) {
                    $('#PCM_Color').removeClass()
                    $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
                    $('#PCM_Arrow').removeClass()
                    $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
                }
            }
            Volume_2_30min = []
            for (var i = 0; i < Array_5.length; i++) {
                Volume_2_30min.push({
                    x: parseFloat(Array_5[i][0]), // the date
                    y: parseFloat(Array_5[i][1]), // the Volume
                    color: VolumeBarColor(parseFloat(Array_5[i][1]))
                })
                i = i + 9
            }
            highchart.update({
                title: {
                    text: 'Nifty Fin Service',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_Fin_Service_30min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_Fin_Service_30min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_Fin_Service_30min[i][1] + '<br> High:' + Chart_Nifty_Fin_Service_30min[i][2] + '<br> Low:' + Chart_Nifty_Fin_Service_30min[i][3] + '<br> Close:' + Chart_Nifty_Fin_Service_30min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: Chart_Nifty_Fin_Service_30min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume_2_30min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            }),
                chart_2.updateSeries([{
                    data: [Bottom_Right_Array_3[1], Bottom_Right_Array_3[2]],
                }])
        }
    });





    $("#Time_Frame").change(function () {
        var x = $("#Time_Frame").prop('selectedIndex');
        var y = $("#Expiry").prop('selectedIndex');
        console.log(x)
        if ($('#nifty_btn').hasClass('gb_active') && x == 1 && y == 0) {
            let compare = 0;
            console.log('u r on nifty_50 2nd expiry')
            if (Counter_for_Nifty_50_15min == 0) {
                Counter_for_Nifty_50_15min += 1
                Chart_Nifty_50_15min = []       // for Candlestick
                sample = []
                numberArray_1 = ohlc
                let Quotient = Math.trunc(Chart_Nifty_50.length / 5);
                let Remainder = Chart_Nifty_50.length % 5;
                let Last_i_position = Quotient * 5;
                for (var i = 0; i < Chart_Nifty_50.length; i++) {
                    sample.push(numberArray_1[i][0], numberArray_1[i][1])
                    for (var j = 2; j < 4; j++) {
                        console.log('i = ', i)
                        // console.log('j = ', j)
                        if (j == 3) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_1[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] <= numberArray_1[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] <= numberArray_1[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i][j] <= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] <= numberArray_1[i][j]) && (numberArray_1[i + 1][j] <= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    else if ((numberArray_1[i + 2][j] <= numberArray_1[i][j]) && (numberArray_1[i + 2][j] <= numberArray_1[i + 1][j])) {
                                        sample.push(numberArray_1[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i][j] <= numberArray_1[i + 2][j])
                                        && (numberArray_1[i][j] <= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] <= numberArray_1[i][j]) && (numberArray_1[i + 1][j] <= numberArray_1[i + 2][j])
                                        && (numberArray_1[i + 1][j] <= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    else if ((numberArray_1[i + 2][j] <= numberArray_1[i][j]) && (numberArray_1[i + 2][j] <= numberArray_1[i + 1][j])
                                        && (numberArray_1[i + 2][j] <= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i + 2][j])
                                    }
                                    else if ((numberArray_1[i + 3][j] <= numberArray_1[i][j]) && (numberArray_1[i + 3][j] <= numberArray_1[i + 1][j])
                                        && (numberArray_1[i + 3][j] <= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_1[i][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i][j] <= numberArray_1[i + 2][j]) && (numberArray_1[i][j] <= numberArray_1[i + 3][j])
                                    && (numberArray_1[i][j] <= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i][j])
                                }
                                else if ((numberArray_1[i + 1][j] <= numberArray_1[i][j]) && (numberArray_1[i + 1][j] <= numberArray_1[i + 2][j]) && (numberArray_1[i + 1][j] <= numberArray_1[i + 3][j])
                                    && (numberArray_1[i + 1][j] <= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 1][j])
                                }
                                else if ((numberArray_1[i + 2][j] <= numberArray_1[i][j]) && (numberArray_1[i + 2][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i + 2][j] <= numberArray_1[i + 3][j])
                                    && (numberArray_1[i + 2][j] <= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 2][j])
                                }
                                else if ((numberArray_1[i + 3][j] <= numberArray_1[i][j]) && (numberArray_1[i + 3][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i + 3][j] <= numberArray_1[i + 2][j])
                                    && (numberArray_1[i + 3][j] <= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 3][j])
                                }
                                else if ((numberArray_1[i + 4][j] <= numberArray_1[i][j]) && (numberArray_1[i + 4][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i + 4][j] <= numberArray_1[i + 2][j])
                                    && (numberArray_1[i + 4][j] <= numberArray_1[i + 3][j])) {
                                    sample.push(numberArray_1[i + 4][j])
                                }
                            }
                        }
                        else if (j == 2) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_1[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] >= numberArray_1[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] >= numberArray_1[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i][j] >= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] >= numberArray_1[i][j]) && (numberArray_1[i + 1][j] >= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    else if ((numberArray_1[i + 2][j] >= numberArray_1[i][j]) && (numberArray_1[i + 2][j] >= numberArray_1[i + 1][j])) {
                                        sample.push(numberArray_1[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i][j] >= numberArray_1[i + 2][j])
                                        && (numberArray_1[i][j] >= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] >= numberArray_1[i][j]) && (numberArray_1[i + 1][j] >= numberArray_1[i + 2][j])
                                        && (numberArray_1[i + 1][j] >= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    else if ((numberArray_1[i + 2][j] >= numberArray_1[i][j]) && (numberArray_1[i + 2][j] >= numberArray_1[i + 1][j])
                                        && (numberArray_1[i + 2][j] >= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i + 2][j])
                                    }
                                    else if ((numberArray_1[i + 3][j] >= numberArray_1[i][j]) && (numberArray_1[i + 3][j] >= numberArray_1[i + 1][j])
                                        && (numberArray_1[i + 3][j] >= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_1[i][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i][j] >= numberArray_1[i + 2][j]) && (numberArray_1[i][j] >= numberArray_1[i + 3][j])
                                    && (numberArray_1[i][j] >= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i][j])
                                }
                                else if ((numberArray_1[i + 1][j] >= numberArray_1[i][j]) && (numberArray_1[i + 1][j] >= numberArray_1[i + 2][j]) && (numberArray_1[i + 1][j] >= numberArray_1[i + 3][j])
                                    && (numberArray_1[i + 1][j] >= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 1][j])
                                }
                                else if ((numberArray_1[i + 2][j] >= numberArray_1[i][j]) && (numberArray_1[i + 2][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i + 2][j] >= numberArray_1[i + 3][j])
                                    && (numberArray_1[i + 2][j] >= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 2][j])
                                }
                                else if ((numberArray_1[i + 3][j] >= numberArray_1[i][j]) && (numberArray_1[i + 3][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i + 3][j] >= numberArray_1[i + 2][j])
                                    && (numberArray_1[i + 3][j] >= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 3][j])
                                }
                                else if ((numberArray_1[i + 4][j] >= numberArray_1[i][j]) && (numberArray_1[i + 4][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i + 4][j] >= numberArray_1[i + 2][j])
                                    && (numberArray_1[i + 4][j] >= numberArray_1[i + 3][j])) {
                                    sample.push(numberArray_1[i + 4][j])
                                }
                            }
                        }
                    }
                    if (i < Last_i_position) {
                        // console.log('i=',i)
                        sample.push(numberArray_1[i + 4][4])
                        Chart_Nifty_50_15min.push(sample)
                        sample = []
                        i = i + 4;
                    }
                    else if (i == Last_i_position) {
                        if (Remainder == 1) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_1[i][4])
                            Chart_Nifty_50_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 2) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_1[i + 1][4])
                            Chart_Nifty_50_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 3) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_1[i + 2][4])
                            Chart_Nifty_50_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 4) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_1[i + 3][4])
                            Chart_Nifty_50_15min.push(sample)
                            i = dummy_i_new
                        }
                        console.log('15min Time Frame')
                        console.log(Chart_Nifty_50_15min)
                        i = i + 5;
                    }
                }

                Volume_15min = []
                for (var i = 0; i < Array_1.length; i++) {
                    Volume_15min.push({
                        x: parseFloat(Array_1[i][0]), // the date
                        y: parseFloat(Array_1[i][1]), // the Volume
                        color: VolumeBarColor(parseFloat(Array_1[i][1]))
                    })
                    i = i + 4
                }
                console.log(Volume_15min)
            }

            highchart.update({
                title: {
                    text: 'Nifty 50',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_50_15min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_50_15min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_50_15min[i][1] + '<br> High:' + Chart_Nifty_50_15min[i][2] + '<br> Low:' + Chart_Nifty_50_15min[i][3] + '<br> Close:' + Chart_Nifty_50_15min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        // pointWidth: 10,
                        data: Chart_Nifty_50_15min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        // pointWidth: 10,
                        data: Volume_15min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            })
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 1 && y == 0) {
            let compare = 0;
            console.log('u r on nifty_bank 2nd expiry')
            if (Counter_for_Nifty_Bank_15min == 0) {
                Counter_for_Nifty_Bank_15min += 1
                Chart_Nifty_Bank_15min = []       // for Candlestick
                sample = []
                numberArray_3 = ohlc_1
                let Quotient = Math.trunc(Chart_Nifty_Bank.length / 5);
                let Remainder = Chart_Nifty_Bank.length % 5;
                let Last_i_position = Quotient * 5;
                for (var i = 0; i < Chart_Nifty_Bank.length; i++) {
                    sample.push(numberArray_3[i][0], numberArray_3[i][1])
                    for (var j = 2; j < 4; j++) {
                        console.log('i = ', i)
                        // console.log('j = ', j)
                        if (j == 3) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_3[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] <= numberArray_3[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] <= numberArray_3[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i][j] <= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] <= numberArray_3[i][j]) && (numberArray_3[i + 1][j] <= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    else if ((numberArray_3[i + 2][j] <= numberArray_3[i][j]) && (numberArray_3[i + 2][j] <= numberArray_3[i + 1][j])) {
                                        sample.push(numberArray_3[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i][j] <= numberArray_3[i + 2][j])
                                        && (numberArray_3[i][j] <= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] <= numberArray_3[i][j]) && (numberArray_3[i + 1][j] <= numberArray_3[i + 2][j])
                                        && (numberArray_3[i + 1][j] <= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    else if ((numberArray_3[i + 2][j] <= numberArray_3[i][j]) && (numberArray_3[i + 2][j] <= numberArray_3[i + 1][j])
                                        && (numberArray_3[i + 2][j] <= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i + 2][j])
                                    }
                                    else if ((numberArray_3[i + 3][j] <= numberArray_3[i][j]) && (numberArray_3[i + 3][j] <= numberArray_3[i + 1][j])
                                        && (numberArray_3[i + 3][j] <= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_3[i][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i][j] <= numberArray_3[i + 2][j]) && (numberArray_3[i][j] <= numberArray_3[i + 3][j])
                                    && (numberArray_3[i][j] <= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i][j])
                                }
                                else if ((numberArray_3[i + 1][j] <= numberArray_3[i][j]) && (numberArray_3[i + 1][j] <= numberArray_3[i + 2][j]) && (numberArray_3[i + 1][j] <= numberArray_3[i + 3][j])
                                    && (numberArray_3[i + 1][j] <= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 1][j])
                                }
                                else if ((numberArray_3[i + 2][j] <= numberArray_3[i][j]) && (numberArray_3[i + 2][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i + 2][j] <= numberArray_3[i + 3][j])
                                    && (numberArray_3[i + 2][j] <= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 2][j])
                                }
                                else if ((numberArray_3[i + 3][j] <= numberArray_3[i][j]) && (numberArray_3[i + 3][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i + 3][j] <= numberArray_3[i + 2][j])
                                    && (numberArray_3[i + 3][j] <= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 3][j])
                                }
                                else if ((numberArray_3[i + 4][j] <= numberArray_3[i][j]) && (numberArray_3[i + 4][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i + 4][j] <= numberArray_3[i + 2][j])
                                    && (numberArray_3[i + 4][j] <= numberArray_3[i + 3][j])) {
                                    sample.push(numberArray_3[i + 4][j])
                                }
                            }
                        }
                        else if (j == 2) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_3[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] >= numberArray_3[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] >= numberArray_3[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i][j] >= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] >= numberArray_3[i][j]) && (numberArray_3[i + 1][j] >= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    else if ((numberArray_3[i + 2][j] >= numberArray_3[i][j]) && (numberArray_3[i + 2][j] >= numberArray_3[i + 1][j])) {
                                        sample.push(numberArray_3[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i][j] >= numberArray_3[i + 2][j])
                                        && (numberArray_3[i][j] >= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] >= numberArray_3[i][j]) && (numberArray_3[i + 1][j] >= numberArray_3[i + 2][j])
                                        && (numberArray_3[i + 1][j] >= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    else if ((numberArray_3[i + 2][j] >= numberArray_3[i][j]) && (numberArray_3[i + 2][j] >= numberArray_3[i + 1][j])
                                        && (numberArray_3[i + 2][j] >= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i + 2][j])
                                    }
                                    else if ((numberArray_3[i + 3][j] >= numberArray_3[i][j]) && (numberArray_3[i + 3][j] >= numberArray_3[i + 1][j])
                                        && (numberArray_3[i + 3][j] >= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_3[i][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i][j] >= numberArray_3[i + 2][j]) && (numberArray_3[i][j] >= numberArray_3[i + 3][j])
                                    && (numberArray_3[i][j] >= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i][j])
                                }
                                else if ((numberArray_3[i + 1][j] >= numberArray_3[i][j]) && (numberArray_3[i + 1][j] >= numberArray_3[i + 2][j]) && (numberArray_3[i + 1][j] >= numberArray_3[i + 3][j])
                                    && (numberArray_3[i + 1][j] >= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 1][j])
                                }
                                else if ((numberArray_3[i + 2][j] >= numberArray_3[i][j]) && (numberArray_3[i + 2][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i + 2][j] >= numberArray_3[i + 3][j])
                                    && (numberArray_3[i + 2][j] >= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 2][j])
                                }
                                else if ((numberArray_3[i + 3][j] >= numberArray_3[i][j]) && (numberArray_3[i + 3][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i + 3][j] >= numberArray_3[i + 2][j])
                                    && (numberArray_3[i + 3][j] >= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 3][j])
                                }
                                else if ((numberArray_3[i + 4][j] >= numberArray_3[i][j]) && (numberArray_3[i + 4][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i + 4][j] >= numberArray_3[i + 2][j])
                                    && (numberArray_3[i + 4][j] >= numberArray_3[i + 3][j])) {
                                    sample.push(numberArray_3[i + 4][j])
                                }
                            }
                        }
                    }
                    if (i < Last_i_position) {
                        // console.log('i=',i)
                        sample.push(numberArray_3[i + 4][4])
                        Chart_Nifty_Bank_15min.push(sample)
                        sample = []
                        i = i + 4;
                    }
                    else if (i == Last_i_position) {
                        if (Remainder == 1) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_3[i][4])
                            Chart_Nifty_Bank_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 2) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_3[i + 1][4])
                            Chart_Nifty_Bank_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 3) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_3[i + 2][4])
                            Chart_Nifty_Bank_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 4) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_3[i + 3][4])
                            Chart_Nifty_Bank_15min.push(sample)
                            i = dummy_i_new
                        }
                        console.log('15min Time Frame')
                        console.log(Chart_Nifty_Bank_15min)
                        i = i + 5;
                    }
                }

                Volume_1_15min = []
                for (var i = 0; i < Array_3.length; i++) {
                    Volume_1_15min.push({
                        x: parseFloat(Array_3[i][0]), // the date
                        y: parseFloat(Array_3[i][1]), // the Volume
                        color: VolumeBarColor(parseFloat(Array_3[i][1]))
                    })
                    i = i + 4
                }
                console.log(Volume_1_15min)
            }

            highchart.update({
                title: {
                    text: 'Nifty Bank',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_Bank_15min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_Bank_15min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_Bank_15min[i][1] + '<br> High:' + Chart_Nifty_Bank_15min[i][2] + '<br> Low:' + Chart_Nifty_Bank_15min[i][3] + '<br> Close:' + Chart_Nifty_Bank_15min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        // pointWidth: 10,
                        data: Chart_Nifty_Bank_15min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        // pointWidth: 10,
                        data: Volume_1_15min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            })
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 1 && y == 0) {
            let compare = 0;
            console.log('u r on nifty_fin_service 2nd expiry')
            if (Counter_for_Nifty_Fin_Service_15min == 0) {
                Counter_for_Nifty_Fin_Service_15min += 1
                Chart_Nifty_Fin_Service_15min = []       // for Candlestick
                sample = []
                numberArray_5 = ohlc_2
                let Quotient = Math.trunc(Chart_Nifty_Fin_Service.length / 5);
                let Remainder = Chart_Nifty_Fin_Service.length % 5;
                let Last_i_position = Quotient * 5;
                for (var i = 0; i < Chart_Nifty_Fin_Service.length; i++) {
                    sample.push(numberArray_5[i][0], numberArray_5[i][1])
                    for (var j = 2; j < 4; j++) {
                        console.log('i = ', i)
                        // console.log('j = ', j)
                        if (j == 3) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_5[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] <= numberArray_5[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] <= numberArray_5[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i][j] <= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] <= numberArray_5[i][j]) && (numberArray_5[i + 1][j] <= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    else if ((numberArray_5[i + 2][j] <= numberArray_5[i][j]) && (numberArray_5[i + 2][j] <= numberArray_5[i + 1][j])) {
                                        sample.push(numberArray_5[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i][j] <= numberArray_5[i + 2][j])
                                        && (numberArray_5[i][j] <= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] <= numberArray_5[i][j]) && (numberArray_5[i + 1][j] <= numberArray_5[i + 2][j])
                                        && (numberArray_5[i + 1][j] <= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    else if ((numberArray_5[i + 2][j] <= numberArray_5[i][j]) && (numberArray_5[i + 2][j] <= numberArray_5[i + 1][j])
                                        && (numberArray_5[i + 2][j] <= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i + 2][j])
                                    }
                                    else if ((numberArray_5[i + 3][j] <= numberArray_5[i][j]) && (numberArray_5[i + 3][j] <= numberArray_5[i + 1][j])
                                        && (numberArray_5[i + 3][j] <= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_5[i][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i][j] <= numberArray_5[i + 2][j]) && (numberArray_5[i][j] <= numberArray_5[i + 3][j])
                                    && (numberArray_5[i][j] <= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i][j])
                                }
                                else if ((numberArray_5[i + 1][j] <= numberArray_5[i][j]) && (numberArray_5[i + 1][j] <= numberArray_5[i + 2][j]) && (numberArray_5[i + 1][j] <= numberArray_5[i + 3][j])
                                    && (numberArray_5[i + 1][j] <= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 1][j])
                                }
                                else if ((numberArray_5[i + 2][j] <= numberArray_5[i][j]) && (numberArray_5[i + 2][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i + 2][j] <= numberArray_5[i + 3][j])
                                    && (numberArray_5[i + 2][j] <= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 2][j])
                                }
                                else if ((numberArray_5[i + 3][j] <= numberArray_5[i][j]) && (numberArray_5[i + 3][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i + 3][j] <= numberArray_5[i + 2][j])
                                    && (numberArray_5[i + 3][j] <= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 3][j])
                                }
                                else if ((numberArray_5[i + 4][j] <= numberArray_5[i][j]) && (numberArray_5[i + 4][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i + 4][j] <= numberArray_5[i + 2][j])
                                    && (numberArray_5[i + 4][j] <= numberArray_5[i + 3][j])) {
                                    sample.push(numberArray_5[i + 4][j])
                                }
                            }
                        }
                        else if (j == 2) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_5[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] >= numberArray_5[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] >= numberArray_5[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i][j] >= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] >= numberArray_5[i][j]) && (numberArray_5[i + 1][j] >= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    else if ((numberArray_5[i + 2][j] >= numberArray_5[i][j]) && (numberArray_5[i + 2][j] >= numberArray_5[i + 1][j])) {
                                        sample.push(numberArray_5[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i][j] >= numberArray_5[i + 2][j])
                                        && (numberArray_5[i][j] >= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] >= numberArray_5[i][j]) && (numberArray_5[i + 1][j] >= numberArray_5[i + 2][j])
                                        && (numberArray_5[i + 1][j] >= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    else if ((numberArray_5[i + 2][j] >= numberArray_5[i][j]) && (numberArray_5[i + 2][j] >= numberArray_5[i + 1][j])
                                        && (numberArray_5[i + 2][j] >= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i + 2][j])
                                    }
                                    else if ((numberArray_5[i + 3][j] >= numberArray_5[i][j]) && (numberArray_5[i + 3][j] >= numberArray_5[i + 1][j])
                                        && (numberArray_5[i + 3][j] >= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_5[i][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i][j] >= numberArray_5[i + 2][j]) && (numberArray_5[i][j] >= numberArray_5[i + 3][j])
                                    && (numberArray_5[i][j] >= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i][j])
                                }
                                else if ((numberArray_5[i + 1][j] >= numberArray_5[i][j]) && (numberArray_5[i + 1][j] >= numberArray_5[i + 2][j]) && (numberArray_5[i + 1][j] >= numberArray_5[i + 3][j])
                                    && (numberArray_5[i + 1][j] >= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 1][j])
                                }
                                else if ((numberArray_5[i + 2][j] >= numberArray_5[i][j]) && (numberArray_5[i + 2][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i + 2][j] >= numberArray_5[i + 3][j])
                                    && (numberArray_5[i + 2][j] >= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 2][j])
                                }
                                else if ((numberArray_5[i + 3][j] >= numberArray_5[i][j]) && (numberArray_5[i + 3][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i + 3][j] >= numberArray_5[i + 2][j])
                                    && (numberArray_5[i + 3][j] >= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 3][j])
                                }
                                else if ((numberArray_5[i + 4][j] >= numberArray_5[i][j]) && (numberArray_5[i + 4][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i + 4][j] >= numberArray_5[i + 2][j])
                                    && (numberArray_5[i + 4][j] >= numberArray_5[i + 3][j])) {
                                    sample.push(numberArray_5[i + 4][j])
                                }
                            }
                        }
                    }
                    if (i < Last_i_position) {
                        // console.log('i=',i)
                        sample.push(numberArray_5[i + 4][4])
                        Chart_Nifty_Fin_Service_15min.push(sample)
                        sample = []
                        i = i + 4;
                    }
                    else if (i == Last_i_position) {
                        if (Remainder == 1) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_5[i][4])
                            Chart_Nifty_Fin_Service_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 2) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_5[i + 1][4])
                            Chart_Nifty_Fin_Service_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 3) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_5[i + 2][4])
                            Chart_Nifty_Fin_Service_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 4) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_5[i + 3][4])
                            Chart_Nifty_Fin_Service_15min.push(sample)
                            i = dummy_i_new
                        }
                        console.log('15min Time Frame')
                        console.log(Chart_Nifty_Fin_Service_15min)
                        i = i + 5;
                    }
                }

                Volume_2_15min = []
                for (var i = 0; i < Array_5.length; i++) {
                    Volume_2_15min.push({
                        x: parseFloat(Array_5[i][0]), // the date
                        y: parseFloat(Array_5[i][1]), // the Volume
                        color: VolumeBarColor(parseFloat(Array_5[i][1]))
                    })
                    i = i + 4
                }
                console.log(Volume_2_15min)
            }

            highchart.update({
                title: {
                    text: 'Nifty Fin Service',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_Fin_Service_15min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_Fin_Service_15min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_Fin_Service_15min[i][1] + '<br> High:' + Chart_Nifty_Fin_Service_15min[i][2] + '<br> Low:' + Chart_Nifty_Fin_Service_15min[i][3] + '<br> Close:' + Chart_Nifty_Fin_Service_15min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        // pointWidth: 10,
                        data: Chart_Nifty_Fin_Service_15min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        // pointWidth: 10,
                        data: Volume_2_15min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            })
        }
        if ($('#nifty_btn').hasClass('gb_active') && x == 2 && y == 0) {
            let compare = 0;
            console.log('u r on nifty_50 2nd expiry')
            if (Counter_for_Nifty_50_30min == 0) {
                Counter_for_Nifty_50_30min += 1
                Chart_Nifty_50_15min = []       // for Candlestick
                Chart_Nifty_50_30min = []       // for Candlestick
                sample = []
                sample_1 = []
                numberArray_1 = ohlc
                let Quotient = Math.trunc(Chart_Nifty_50.length / 5);
                let Remainder = Chart_Nifty_50.length % 5;
                let Last_i_position = Quotient * 5;
                for (var i = 0; i < Chart_Nifty_50.length; i++) {
                    sample.push(numberArray_1[i][0], numberArray_1[i][1])
                    for (var j = 2; j < 4; j++) {
                        console.log('i = ', i)
                        // console.log('j = ', j)
                        if (j == 3) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_1[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] <= numberArray_1[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] <= numberArray_1[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i][j] <= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] <= numberArray_1[i][j]) && (numberArray_1[i + 1][j] <= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    else if ((numberArray_1[i + 2][j] <= numberArray_1[i][j]) && (numberArray_1[i + 2][j] <= numberArray_1[i + 1][j])) {
                                        sample.push(numberArray_1[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i][j] <= numberArray_1[i + 2][j])
                                        && (numberArray_1[i][j] <= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] <= numberArray_1[i][j]) && (numberArray_1[i + 1][j] <= numberArray_1[i + 2][j])
                                        && (numberArray_1[i + 1][j] <= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    else if ((numberArray_1[i + 2][j] <= numberArray_1[i][j]) && (numberArray_1[i + 2][j] <= numberArray_1[i + 1][j])
                                        && (numberArray_1[i + 2][j] <= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i + 2][j])
                                    }
                                    else if ((numberArray_1[i + 3][j] <= numberArray_1[i][j]) && (numberArray_1[i + 3][j] <= numberArray_1[i + 1][j])
                                        && (numberArray_1[i + 3][j] <= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_1[i][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i][j] <= numberArray_1[i + 2][j]) && (numberArray_1[i][j] <= numberArray_1[i + 3][j])
                                    && (numberArray_1[i][j] <= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i][j])
                                }
                                else if ((numberArray_1[i + 1][j] <= numberArray_1[i][j]) && (numberArray_1[i + 1][j] <= numberArray_1[i + 2][j]) && (numberArray_1[i + 1][j] <= numberArray_1[i + 3][j])
                                    && (numberArray_1[i + 1][j] <= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 1][j])
                                }
                                else if ((numberArray_1[i + 2][j] <= numberArray_1[i][j]) && (numberArray_1[i + 2][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i + 2][j] <= numberArray_1[i + 3][j])
                                    && (numberArray_1[i + 2][j] <= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 2][j])
                                }
                                else if ((numberArray_1[i + 3][j] <= numberArray_1[i][j]) && (numberArray_1[i + 3][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i + 3][j] <= numberArray_1[i + 2][j])
                                    && (numberArray_1[i + 3][j] <= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 3][j])
                                }
                                else if ((numberArray_1[i + 4][j] <= numberArray_1[i][j]) && (numberArray_1[i + 4][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i + 4][j] <= numberArray_1[i + 2][j])
                                    && (numberArray_1[i + 4][j] <= numberArray_1[i + 3][j])) {
                                    sample.push(numberArray_1[i + 4][j])
                                }
                            }
                        }
                        else if (j == 2) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_1[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] >= numberArray_1[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] >= numberArray_1[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i][j] >= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] >= numberArray_1[i][j]) && (numberArray_1[i + 1][j] >= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    else if ((numberArray_1[i + 2][j] >= numberArray_1[i][j]) && (numberArray_1[i + 2][j] >= numberArray_1[i + 1][j])) {
                                        sample.push(numberArray_1[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i][j] >= numberArray_1[i + 2][j])
                                        && (numberArray_1[i][j] >= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] >= numberArray_1[i][j]) && (numberArray_1[i + 1][j] >= numberArray_1[i + 2][j])
                                        && (numberArray_1[i + 1][j] >= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    else if ((numberArray_1[i + 2][j] >= numberArray_1[i][j]) && (numberArray_1[i + 2][j] >= numberArray_1[i + 1][j])
                                        && (numberArray_1[i + 2][j] >= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i + 2][j])
                                    }
                                    else if ((numberArray_1[i + 3][j] >= numberArray_1[i][j]) && (numberArray_1[i + 3][j] >= numberArray_1[i + 1][j])
                                        && (numberArray_1[i + 3][j] >= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_1[i][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i][j] >= numberArray_1[i + 2][j]) && (numberArray_1[i][j] >= numberArray_1[i + 3][j])
                                    && (numberArray_1[i][j] >= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i][j])
                                }
                                else if ((numberArray_1[i + 1][j] >= numberArray_1[i][j]) && (numberArray_1[i + 1][j] >= numberArray_1[i + 2][j]) && (numberArray_1[i + 1][j] >= numberArray_1[i + 3][j])
                                    && (numberArray_1[i + 1][j] >= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 1][j])
                                }
                                else if ((numberArray_1[i + 2][j] >= numberArray_1[i][j]) && (numberArray_1[i + 2][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i + 2][j] >= numberArray_1[i + 3][j])
                                    && (numberArray_1[i + 2][j] >= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 2][j])
                                }
                                else if ((numberArray_1[i + 3][j] >= numberArray_1[i][j]) && (numberArray_1[i + 3][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i + 3][j] >= numberArray_1[i + 2][j])
                                    && (numberArray_1[i + 3][j] >= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 3][j])
                                }
                                else if ((numberArray_1[i + 4][j] >= numberArray_1[i][j]) && (numberArray_1[i + 4][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i + 4][j] >= numberArray_1[i + 2][j])
                                    && (numberArray_1[i + 4][j] >= numberArray_1[i + 3][j])) {
                                    sample.push(numberArray_1[i + 4][j])
                                }
                            }
                        }
                    }
                    if (i < Last_i_position) {
                        // console.log('i=',i)
                        sample.push(numberArray_1[i + 4][4])
                        Chart_Nifty_50_15min.push(sample)
                        sample = []
                        i = i + 4;
                    }
                    else if (i == Last_i_position) {
                        if (Remainder == 1) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_1[i][4])
                            Chart_Nifty_50_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 2) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_1[i + 1][4])
                            Chart_Nifty_50_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 3) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_1[i + 2][4])
                            Chart_Nifty_50_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 4) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_1[i + 3][4])
                            Chart_Nifty_50_15min.push(sample)
                            i = dummy_i_new
                        }
                        console.log('30min Time Frame')
                        console.log(Chart_Nifty_50_30min)
                        i = i + 5;
                    }
                }
                let Quotient_New = Math.trunc(Chart_Nifty_50_15min.length / 2);
                let Remainder_New = Chart_Nifty_50_15min.length % 2;
                let Last_i_position_New = Quotient_New * 2;
                console.log('Quotient_New = ', Quotient_New)
                for (var i = 0; i < Chart_Nifty_50_15min.length; i++) {
                    sample_1.push(Chart_Nifty_50_15min[i][0], Chart_Nifty_50_15min[i][1])
                    for (var j = 2; j < 4; j++) {
                        console.log('i = ', i)
                        // console.log('j = ', j)
                        if (j == 3) {
                            if (i == Last_i_position_New) {
                                if (Remainder_New == 1) {
                                    dummy_i = i;
                                    i = Last_i_position_New
                                    // console.log('Remainder = ', Remainder)
                                    sample_1.push(Chart_Nifty_50_15min[i][j])
                                    i = dummy_i;
                                }
                            }
                            else {
                                if ((Chart_Nifty_50_15min[i][j] <= Chart_Nifty_50_15min[i + 1][j])) {
                                    sample_1.push(Chart_Nifty_50_15min[i][j])
                                }
                                else if ((Chart_Nifty_50_15min[i + 1][j] <= Chart_Nifty_50_15min[i][j])) {
                                    sample_1.push(Chart_Nifty_50_15min[i + 1][j])
                                }
                            }
                        }
                        else if (j == 2) {
                            if (i == Last_i_position_New) {
                                if (Remainder_New == 1) {
                                    dummy_i = i;
                                    i = Last_i_position_New
                                    // console.log('Remainder = ', Remainder)
                                    sample_1.push(Chart_Nifty_50_15min[i][j])
                                    i = dummy_i;
                                }
                            }
                            else {
                                if ((Chart_Nifty_50_15min[i][j] >= Chart_Nifty_50_15min[i + 1][j])) {
                                    sample_1.push(Chart_Nifty_50_15min[i][j])
                                }
                                else if ((Chart_Nifty_50_15min[i + 1][j] >= Chart_Nifty_50_15min[i][j])) {
                                    sample_1.push(Chart_Nifty_50_15min[i + 1][j])
                                }
                            }
                        }
                    }
                    if (i < Last_i_position_New) {
                        // console.log('i=',i)
                        sample_1.push(Chart_Nifty_50_15min[i + 1][4])
                        Chart_Nifty_50_30min.push(sample_1)
                        sample_1 = []
                        i = i + 1;
                    }
                    else if (i == Last_i_position_New) {
                        if (Remainder_New == 1) {
                            dummy_i_new = i;
                            i = Last_i_position_New
                            sample_1.push(Chart_Nifty_50_15min[i][4])
                            Chart_Nifty_50_30min.push(sample_1)
                            i = dummy_i_new
                        }
                        console.log('30min Time Frame')
                        console.log(Chart_Nifty_50_30min)
                        // i = i + 2
                    }
                }

                Volume_30min = []
                for (var i = 0; i < Array_1.length; i++) {
                    Volume_30min.push({
                        x: parseFloat(Array_1[i][0]), // the date
                        y: parseFloat(Array_1[i][1]), // the Volume
                        color: VolumeBarColor(parseFloat(Array_1[i][1]))
                    })
                    i = i + 9
                }
                // console.log(Array_1_30min)
            }
            highchart.update({
                title: {
                    text: 'Nifty 50',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_50_30min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_50_30min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_50_30min[i][1] + '<br> High:' + Chart_Nifty_50_30min[i][2] + '<br> Low:' + Chart_Nifty_50_30min[i][3] + '<br> Close:' + Chart_Nifty_50_30min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        // pointWidth: 10,
                        data: Chart_Nifty_50_30min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        // pointWidth: 10,
                        data: Volume_30min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            })
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 2 && y == 0) {
            let compare = 0;
            console.log('u r on nifty_bank 2nd expiry')
            if (Counter_for_Nifty_Bank_30min == 0) {
                Counter_for_Nifty_Bank_30min += 1
                Chart_Nifty_Bank_15min = []       // for Candlestick
                Chart_Nifty_Bank_30min = []       // for Candlestick
                sample_1 = []
                sample = []
                numberArray_3 = ohlc_1
                let Quotient = Math.trunc(Chart_Nifty_Bank.length / 5);
                let Remainder = Chart_Nifty_Bank.length % 5;
                let Last_i_position = Quotient * 5;
                for (var i = 0; i < Chart_Nifty_Bank.length; i++) {
                    sample.push(numberArray_3[i][0], numberArray_3[i][1])
                    for (var j = 2; j < 4; j++) {
                        console.log('i = ', i)
                        // console.log('j = ', j)
                        if (j == 3) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_3[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] <= numberArray_3[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] <= numberArray_3[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i][j] <= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] <= numberArray_3[i][j]) && (numberArray_3[i + 1][j] <= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    else if ((numberArray_3[i + 2][j] <= numberArray_3[i][j]) && (numberArray_3[i + 2][j] <= numberArray_3[i + 1][j])) {
                                        sample.push(numberArray_3[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i][j] <= numberArray_3[i + 2][j])
                                        && (numberArray_3[i][j] <= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] <= numberArray_3[i][j]) && (numberArray_3[i + 1][j] <= numberArray_3[i + 2][j])
                                        && (numberArray_3[i + 1][j] <= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    else if ((numberArray_3[i + 2][j] <= numberArray_3[i][j]) && (numberArray_3[i + 2][j] <= numberArray_3[i + 1][j])
                                        && (numberArray_3[i + 2][j] <= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i + 2][j])
                                    }
                                    else if ((numberArray_3[i + 3][j] <= numberArray_3[i][j]) && (numberArray_3[i + 3][j] <= numberArray_3[i + 1][j])
                                        && (numberArray_3[i + 3][j] <= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_3[i][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i][j] <= numberArray_3[i + 2][j]) && (numberArray_3[i][j] <= numberArray_3[i + 3][j])
                                    && (numberArray_3[i][j] <= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i][j])
                                }
                                else if ((numberArray_3[i + 1][j] <= numberArray_3[i][j]) && (numberArray_3[i + 1][j] <= numberArray_3[i + 2][j]) && (numberArray_3[i + 1][j] <= numberArray_3[i + 3][j])
                                    && (numberArray_3[i + 1][j] <= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 1][j])
                                }
                                else if ((numberArray_3[i + 2][j] <= numberArray_3[i][j]) && (numberArray_3[i + 2][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i + 2][j] <= numberArray_3[i + 3][j])
                                    && (numberArray_3[i + 2][j] <= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 2][j])
                                }
                                else if ((numberArray_3[i + 3][j] <= numberArray_3[i][j]) && (numberArray_3[i + 3][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i + 3][j] <= numberArray_3[i + 2][j])
                                    && (numberArray_3[i + 3][j] <= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 3][j])
                                }
                                else if ((numberArray_3[i + 4][j] <= numberArray_3[i][j]) && (numberArray_3[i + 4][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i + 4][j] <= numberArray_3[i + 2][j])
                                    && (numberArray_3[i + 4][j] <= numberArray_3[i + 3][j])) {
                                    sample.push(numberArray_3[i + 4][j])
                                }
                            }
                        }
                        else if (j == 2) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_3[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] >= numberArray_3[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] >= numberArray_3[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i][j] >= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] >= numberArray_3[i][j]) && (numberArray_3[i + 1][j] >= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    else if ((numberArray_3[i + 2][j] >= numberArray_3[i][j]) && (numberArray_3[i + 2][j] >= numberArray_3[i + 1][j])) {
                                        sample.push(numberArray_3[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i][j] >= numberArray_3[i + 2][j])
                                        && (numberArray_3[i][j] >= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] >= numberArray_3[i][j]) && (numberArray_3[i + 1][j] >= numberArray_3[i + 2][j])
                                        && (numberArray_3[i + 1][j] >= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    else if ((numberArray_3[i + 2][j] >= numberArray_3[i][j]) && (numberArray_3[i + 2][j] >= numberArray_3[i + 1][j])
                                        && (numberArray_3[i + 2][j] >= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i + 2][j])
                                    }
                                    else if ((numberArray_3[i + 3][j] >= numberArray_3[i][j]) && (numberArray_3[i + 3][j] >= numberArray_3[i + 1][j])
                                        && (numberArray_3[i + 3][j] >= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_3[i][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i][j] >= numberArray_3[i + 2][j]) && (numberArray_3[i][j] >= numberArray_3[i + 3][j])
                                    && (numberArray_3[i][j] >= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i][j])
                                }
                                else if ((numberArray_3[i + 1][j] >= numberArray_3[i][j]) && (numberArray_3[i + 1][j] >= numberArray_3[i + 2][j]) && (numberArray_3[i + 1][j] >= numberArray_3[i + 3][j])
                                    && (numberArray_3[i + 1][j] >= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 1][j])
                                }
                                else if ((numberArray_3[i + 2][j] >= numberArray_3[i][j]) && (numberArray_3[i + 2][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i + 2][j] >= numberArray_3[i + 3][j])
                                    && (numberArray_3[i + 2][j] >= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 2][j])
                                }
                                else if ((numberArray_3[i + 3][j] >= numberArray_3[i][j]) && (numberArray_3[i + 3][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i + 3][j] >= numberArray_3[i + 2][j])
                                    && (numberArray_3[i + 3][j] >= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 3][j])
                                }
                                else if ((numberArray_3[i + 4][j] >= numberArray_3[i][j]) && (numberArray_3[i + 4][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i + 4][j] >= numberArray_3[i + 2][j])
                                    && (numberArray_3[i + 4][j] >= numberArray_3[i + 3][j])) {
                                    sample.push(numberArray_3[i + 4][j])
                                }
                            }
                        }
                    }
                    if (i < Last_i_position) {
                        // console.log('i=',i)
                        sample.push(numberArray_3[i + 4][4])
                        Chart_Nifty_Bank_15min.push(sample)
                        sample = []
                        i = i + 4;
                    }
                    else if (i == Last_i_position) {
                        if (Remainder == 1) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_3[i][4])
                            Chart_Nifty_Bank_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 2) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_3[i + 1][4])
                            Chart_Nifty_Bank_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 3) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_3[i + 2][4])
                            Chart_Nifty_Bank_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 4) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_3[i + 3][4])
                            Chart_Nifty_Bank_15min.push(sample)
                            i = dummy_i_new
                        }
                        console.log('15min Time Frame')
                        console.log(Chart_Nifty_Bank_15min)
                        i = i + 5;
                    }
                }
                let Quotient_New = Math.trunc(Chart_Nifty_Bank_15min.length / 2);
                let Remainder_New = Chart_Nifty_Bank_15min.length % 2;
                let Last_i_position_New = Quotient_New * 2;
                console.log('Quotient_New = ', Quotient_New)
                for (var i = 0; i < Chart_Nifty_Bank_15min.length; i++) {
                    sample_1.push(Chart_Nifty_Bank_15min[i][0], Chart_Nifty_Bank_15min[i][1])
                    for (var j = 2; j < 4; j++) {
                        console.log('i = ', i)
                        // console.log('j = ', j)
                        if (j == 3) {
                            if (i == Last_i_position_New) {
                                if (Remainder_New == 1) {
                                    dummy_i = i;
                                    i = Last_i_position_New
                                    // console.log('Remainder = ', Remainder)
                                    sample_1.push(Chart_Nifty_Bank_15min[i][j])
                                    i = dummy_i;
                                }
                            }
                            else {
                                if ((Chart_Nifty_Bank_15min[i][j] <= Chart_Nifty_Bank_15min[i + 1][j])) {
                                    sample_1.push(Chart_Nifty_Bank_15min[i][j])
                                }
                                else if ((Chart_Nifty_Bank_15min[i + 1][j] <= Chart_Nifty_Bank_15min[i][j])) {
                                    sample_1.push(Chart_Nifty_Bank_15min[i + 1][j])
                                }
                            }
                        }
                        else if (j == 2) {
                            if (i == Last_i_position_New) {
                                if (Remainder_New == 1) {
                                    dummy_i = i;
                                    i = Last_i_position_New
                                    // console.log('Remainder = ', Remainder)
                                    sample_1.push(Chart_Nifty_Bank_15min[i][j])
                                    i = dummy_i;
                                }
                            }
                            else {
                                if ((Chart_Nifty_Bank_15min[i][j] >= Chart_Nifty_Bank_15min[i + 1][j])) {
                                    sample_1.push(Chart_Nifty_Bank_15min[i][j])
                                }
                                else if ((Chart_Nifty_Bank_15min[i + 1][j] >= Chart_Nifty_Bank_15min[i][j])) {
                                    sample_1.push(Chart_Nifty_Bank_15min[i + 1][j])
                                }
                            }
                        }
                    }
                    if (i < Last_i_position_New) {
                        // console.log('i=',i)
                        sample_1.push(Chart_Nifty_Bank_15min[i + 1][4])
                        Chart_Nifty_Bank_30min.push(sample_1)
                        sample_1 = []
                        i = i + 1;
                    }
                    else if (i == Last_i_position_New) {
                        if (Remainder_New == 1) {
                            dummy_i_new = i;
                            i = Last_i_position_New
                            sample_1.push(Chart_Nifty_Bank_15min[i][4])
                            Chart_Nifty_Bank_30min.push(sample_1)
                            i = dummy_i_new
                        }
                        console.log('30min Time Frame')
                        console.log(Chart_Nifty_Bank_30min)
                        // i = i + 2
                    }
                }
                Volume_1_30min = []
                for (var i = 0; i < Array_3.length; i++) {
                    Volume_1_30min.push({
                        x: parseFloat(Array_3[i][0]), // the date
                        y: parseFloat(Array_3[i][1]), // the Volume
                        color: VolumeBarColor(parseFloat(Array_3[i][1]))
                    })
                    i = i + 9
                }
            }

            highchart.update({
                title: {
                    text: 'Nifty Bank',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_Bank_30min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_Bank_30min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_Bank_30min[i][1] + '<br> High:' + Chart_Nifty_Bank_30min[i][2] + '<br> Low:' + Chart_Nifty_Bank_30min[i][3] + '<br> Close:' + Chart_Nifty_Bank_30min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        // pointWidth: 10,
                        data: Chart_Nifty_Bank_30min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        // pointWidth: 10,
                        data: Volume_1_30min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            })
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 2 && y == 0) {
            let compare = 0;
            console.log('u r on nifty_fin_service 2nd expiry')
            if (Counter_for_Nifty_Fin_Service_30min == 0) {
                Counter_for_Nifty_Fin_Service_30min += 1
                Chart_Nifty_Fin_Service_15min = []       // for Candlestick
                Chart_Nifty_Fin_Service_30min = []       // for Candlestick
                sample_1 = []
                sample = []
                numberArray_5 = ohlc_2
                let Quotient = Math.trunc(Chart_Nifty_Fin_Service.length / 5);
                let Remainder = Chart_Nifty_Fin_Service.length % 5;
                let Last_i_position = Quotient * 5;
                for (var i = 0; i < Chart_Nifty_Fin_Service.length; i++) {
                    sample.push(numberArray_5[i][0], numberArray_5[i][1])
                    for (var j = 2; j < 4; j++) {
                        console.log('i = ', i)
                        // console.log('j = ', j)
                        if (j == 3) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_5[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] <= numberArray_5[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] <= numberArray_5[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i][j] <= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] <= numberArray_5[i][j]) && (numberArray_5[i + 1][j] <= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    else if ((numberArray_5[i + 2][j] <= numberArray_5[i][j]) && (numberArray_5[i + 2][j] <= numberArray_5[i + 1][j])) {
                                        sample.push(numberArray_5[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i][j] <= numberArray_5[i + 2][j])
                                        && (numberArray_5[i][j] <= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] <= numberArray_5[i][j]) && (numberArray_5[i + 1][j] <= numberArray_5[i + 2][j])
                                        && (numberArray_5[i + 1][j] <= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    else if ((numberArray_5[i + 2][j] <= numberArray_5[i][j]) && (numberArray_5[i + 2][j] <= numberArray_5[i + 1][j])
                                        && (numberArray_5[i + 2][j] <= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i + 2][j])
                                    }
                                    else if ((numberArray_5[i + 3][j] <= numberArray_5[i][j]) && (numberArray_5[i + 3][j] <= numberArray_5[i + 1][j])
                                        && (numberArray_5[i + 3][j] <= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_5[i][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i][j] <= numberArray_5[i + 2][j]) && (numberArray_5[i][j] <= numberArray_5[i + 3][j])
                                    && (numberArray_5[i][j] <= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i][j])
                                }
                                else if ((numberArray_5[i + 1][j] <= numberArray_5[i][j]) && (numberArray_5[i + 1][j] <= numberArray_5[i + 2][j]) && (numberArray_5[i + 1][j] <= numberArray_5[i + 3][j])
                                    && (numberArray_5[i + 1][j] <= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 1][j])
                                }
                                else if ((numberArray_5[i + 2][j] <= numberArray_5[i][j]) && (numberArray_5[i + 2][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i + 2][j] <= numberArray_5[i + 3][j])
                                    && (numberArray_5[i + 2][j] <= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 2][j])
                                }
                                else if ((numberArray_5[i + 3][j] <= numberArray_5[i][j]) && (numberArray_5[i + 3][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i + 3][j] <= numberArray_5[i + 2][j])
                                    && (numberArray_5[i + 3][j] <= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 3][j])
                                }
                                else if ((numberArray_5[i + 4][j] <= numberArray_5[i][j]) && (numberArray_5[i + 4][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i + 4][j] <= numberArray_5[i + 2][j])
                                    && (numberArray_5[i + 4][j] <= numberArray_5[i + 3][j])) {
                                    sample.push(numberArray_5[i + 4][j])
                                }
                            }
                        }
                        else if (j == 2) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_5[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] >= numberArray_5[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] >= numberArray_5[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i][j] >= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] >= numberArray_5[i][j]) && (numberArray_5[i + 1][j] >= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    else if ((numberArray_5[i + 2][j] >= numberArray_5[i][j]) && (numberArray_5[i + 2][j] >= numberArray_5[i + 1][j])) {
                                        sample.push(numberArray_5[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i][j] >= numberArray_5[i + 2][j])
                                        && (numberArray_5[i][j] >= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] >= numberArray_5[i][j]) && (numberArray_5[i + 1][j] >= numberArray_5[i + 2][j])
                                        && (numberArray_5[i + 1][j] >= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    else if ((numberArray_5[i + 2][j] >= numberArray_5[i][j]) && (numberArray_5[i + 2][j] >= numberArray_5[i + 1][j])
                                        && (numberArray_5[i + 2][j] >= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i + 2][j])
                                    }
                                    else if ((numberArray_5[i + 3][j] >= numberArray_5[i][j]) && (numberArray_5[i + 3][j] >= numberArray_5[i + 1][j])
                                        && (numberArray_5[i + 3][j] >= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_5[i][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i][j] >= numberArray_5[i + 2][j]) && (numberArray_5[i][j] >= numberArray_5[i + 3][j])
                                    && (numberArray_5[i][j] >= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i][j])
                                }
                                else if ((numberArray_5[i + 1][j] >= numberArray_5[i][j]) && (numberArray_5[i + 1][j] >= numberArray_5[i + 2][j]) && (numberArray_5[i + 1][j] >= numberArray_5[i + 3][j])
                                    && (numberArray_5[i + 1][j] >= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 1][j])
                                }
                                else if ((numberArray_5[i + 2][j] >= numberArray_5[i][j]) && (numberArray_5[i + 2][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i + 2][j] >= numberArray_5[i + 3][j])
                                    && (numberArray_5[i + 2][j] >= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 2][j])
                                }
                                else if ((numberArray_5[i + 3][j] >= numberArray_5[i][j]) && (numberArray_5[i + 3][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i + 3][j] >= numberArray_5[i + 2][j])
                                    && (numberArray_5[i + 3][j] >= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 3][j])
                                }
                                else if ((numberArray_5[i + 4][j] >= numberArray_5[i][j]) && (numberArray_5[i + 4][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i + 4][j] >= numberArray_5[i + 2][j])
                                    && (numberArray_5[i + 4][j] >= numberArray_5[i + 3][j])) {
                                    sample.push(numberArray_5[i + 4][j])
                                }
                            }
                        }
                    }
                    if (i < Last_i_position) {
                        // console.log('i=',i)
                        sample.push(numberArray_5[i + 4][4])
                        Chart_Nifty_Fin_Service_15min.push(sample)
                        sample = []
                        i = i + 4;
                    }
                    else if (i == Last_i_position) {
                        if (Remainder == 1) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_5[i][4])
                            Chart_Nifty_Fin_Service_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 2) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_5[i + 1][4])
                            Chart_Nifty_Fin_Service_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 3) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_5[i + 2][4])
                            Chart_Nifty_Fin_Service_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 4) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_5[i + 3][4])
                            Chart_Nifty_Fin_Service_15min.push(sample)
                            i = dummy_i_new
                        }
                        console.log('15min Time Frame')
                        console.log(Chart_Nifty_Fin_Service_15min)
                        i = i + 5;
                    }
                }
                let Quotient_New = Math.trunc(Chart_Nifty_Fin_Service_15min.length / 2);
                let Remainder_New = Chart_Nifty_Fin_Service_15min.length % 2;
                let Last_i_position_New = Quotient_New * 2;
                console.log('Quotient_New = ', Quotient_New)
                for (var i = 0; i < Chart_Nifty_Fin_Service_15min.length; i++) {
                    sample_1.push(Chart_Nifty_Fin_Service_15min[i][0], Chart_Nifty_Fin_Service_15min[i][1])
                    for (var j = 2; j < 4; j++) {
                        console.log('i = ', i)
                        // console.log('j = ', j)
                        if (j == 3) {
                            if (i == Last_i_position_New) {
                                if (Remainder_New == 1) {
                                    dummy_i = i;
                                    i = Last_i_position_New
                                    // console.log('Remainder = ', Remainder)
                                    sample_1.push(Chart_Nifty_Fin_Service_15min[i][j])
                                    i = dummy_i;
                                }
                            }
                            else {
                                if ((Chart_Nifty_Fin_Service_15min[i][j] <= Chart_Nifty_Fin_Service_15min[i + 1][j])) {
                                    sample_1.push(Chart_Nifty_Fin_Service_15min[i][j])
                                }
                                else if ((Chart_Nifty_Fin_Service_15min[i + 1][j] <= Chart_Nifty_Fin_Service_15min[i][j])) {
                                    sample_1.push(Chart_Nifty_Fin_Service_15min[i + 1][j])
                                }
                            }
                        }
                        else if (j == 2) {
                            if (i == Last_i_position_New) {
                                if (Remainder_New == 1) {
                                    dummy_i = i;
                                    i = Last_i_position_New
                                    // console.log('Remainder = ', Remainder)
                                    sample_1.push(Chart_Nifty_Fin_Service_15min[i][j])
                                    i = dummy_i;
                                }
                            }
                            else {
                                if ((Chart_Nifty_Fin_Service_15min[i][j] >= Chart_Nifty_Fin_Service_15min[i + 1][j])) {
                                    sample_1.push(Chart_Nifty_Fin_Service_15min[i][j])
                                }
                                else if ((Chart_Nifty_Fin_Service_15min[i + 1][j] >= Chart_Nifty_Fin_Service_15min[i][j])) {
                                    sample_1.push(Chart_Nifty_Fin_Service_15min[i + 1][j])
                                }
                            }
                        }
                    }
                    if (i < Last_i_position_New) {
                        // console.log('i=',i)
                        sample_1.push(Chart_Nifty_Fin_Service_15min[i + 1][4])
                        Chart_Nifty_Fin_Service_30min.push(sample_1)
                        sample_1 = []
                        i = i + 1;
                    }
                    else if (i == Last_i_position_New) {
                        if (Remainder_New == 1) {
                            dummy_i_new = i;
                            i = Last_i_position_New
                            sample_1.push(Chart_Nifty_Fin_Service_15min[i][4])
                            Chart_Nifty_Fin_Service_30min.push(sample_1)
                            i = dummy_i_new
                        }
                        console.log('30min Time Frame')
                        console.log(Chart_Nifty_Fin_Service_30min)
                        // i = i + 2
                    }
                }

                Volume_2_30min = []
                for (var i = 0; i < Array_5.length; i++) {
                    Volume_2_30min.push({
                        x: parseFloat(Array_5[i][0]), // the date
                        y: parseFloat(Array_5[i][1]), // the Volume
                        color: VolumeBarColor(parseFloat(Array_5[i][1]))
                    })
                    i = i + 9
                }
            }
            highchart.update({
                title: {
                    text: 'Nifty Fin Service',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_Fin_Service_30min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_Fin_Service_30min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_Fin_Service_30min[i][1] + '<br> High:' + Chart_Nifty_Fin_Service_30min[i][2] + '<br> Low:' + Chart_Nifty_Fin_Service_30min[i][3] + '<br> Close:' + Chart_Nifty_Fin_Service_30min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        // pointWidth: 10,
                        data: Chart_Nifty_Fin_Service_30min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        // pointWidth: 10,
                        data: Volume_2_30min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            })
        }
        if ($('#nifty_btn').hasClass('gb_active') && x == 0 && y == 0) {
            highchart.update({
                title: {
                    text: 'Nifty 50',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < ohlc.length; j++) {
                                        if (this.points[i].y == ohlc[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + ohlc[i][1] + '<br> High:' + ohlc[i][2] + '<br> Low:' + ohlc[i][3] + '<br> Close:' + ohlc[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: ohlc,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            })
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 0 && y == 0) {
            highchart.update({
                title: {
                    text: 'Nifty Bank',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < ohlc_1.length; j++) {
                                        if (this.points[i].y == ohlc_1[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + ohlc_1[i][1] + '<br> High:' + ohlc_1[i][2] + '<br> Low:' + ohlc_1[i][3] + '<br> Close:' + ohlc_1[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: ohlc_1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume_1,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            })
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 0 && y == 0) {
            highchart.update({
                title: {
                    text: 'Nifty Fin Service',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < ohlc_2.length; j++) {
                                        if (this.points[i].y == ohlc_2[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + ohlc_2[i][1] + '<br> High:' + ohlc_2[i][2] + '<br> Low:' + ohlc_2[i][3] + '<br> Close:' + ohlc_2[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: ohlc_2,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume_2,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            })
        }
        if ($('#nifty_btn').hasClass('gb_active') && x == 1 && y == 1) {
            let compare = 0;
            console.log('u r on nifty_50 2nd expiry')
            if (Counter_for_Nifty_50_15min_exp_2 == 0) {
                Counter_for_Nifty_50_15min_exp_2 += 1
                Chart_Nifty_50_15min = []       // for Candlestick
                sample = []
                numberArray_1 = ohlc
                let Quotient = Math.trunc(Chart_Nifty_50.length / 5);
                let Remainder = Chart_Nifty_50.length % 5;
                let Last_i_position = Quotient * 5;
                for (var i = 0; i < Chart_Nifty_50.length; i++) {
                    sample.push(numberArray_1[i][0], numberArray_1[i][1])
                    for (var j = 2; j < 4; j++) {
                        console.log('i = ', i)
                        // console.log('j = ', j)
                        if (j == 3) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_1[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] <= numberArray_1[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] <= numberArray_1[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i][j] <= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] <= numberArray_1[i][j]) && (numberArray_1[i + 1][j] <= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    else if ((numberArray_1[i + 2][j] <= numberArray_1[i][j]) && (numberArray_1[i + 2][j] <= numberArray_1[i + 1][j])) {
                                        sample.push(numberArray_1[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i][j] <= numberArray_1[i + 2][j])
                                        && (numberArray_1[i][j] <= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] <= numberArray_1[i][j]) && (numberArray_1[i + 1][j] <= numberArray_1[i + 2][j])
                                        && (numberArray_1[i + 1][j] <= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    else if ((numberArray_1[i + 2][j] <= numberArray_1[i][j]) && (numberArray_1[i + 2][j] <= numberArray_1[i + 1][j])
                                        && (numberArray_1[i + 2][j] <= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i + 2][j])
                                    }
                                    else if ((numberArray_1[i + 3][j] <= numberArray_1[i][j]) && (numberArray_1[i + 3][j] <= numberArray_1[i + 1][j])
                                        && (numberArray_1[i + 3][j] <= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_1[i][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i][j] <= numberArray_1[i + 2][j]) && (numberArray_1[i][j] <= numberArray_1[i + 3][j])
                                    && (numberArray_1[i][j] <= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i][j])
                                }
                                else if ((numberArray_1[i + 1][j] <= numberArray_1[i][j]) && (numberArray_1[i + 1][j] <= numberArray_1[i + 2][j]) && (numberArray_1[i + 1][j] <= numberArray_1[i + 3][j])
                                    && (numberArray_1[i + 1][j] <= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 1][j])
                                }
                                else if ((numberArray_1[i + 2][j] <= numberArray_1[i][j]) && (numberArray_1[i + 2][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i + 2][j] <= numberArray_1[i + 3][j])
                                    && (numberArray_1[i + 2][j] <= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 2][j])
                                }
                                else if ((numberArray_1[i + 3][j] <= numberArray_1[i][j]) && (numberArray_1[i + 3][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i + 3][j] <= numberArray_1[i + 2][j])
                                    && (numberArray_1[i + 3][j] <= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 3][j])
                                }
                                else if ((numberArray_1[i + 4][j] <= numberArray_1[i][j]) && (numberArray_1[i + 4][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i + 4][j] <= numberArray_1[i + 2][j])
                                    && (numberArray_1[i + 4][j] <= numberArray_1[i + 3][j])) {
                                    sample.push(numberArray_1[i + 4][j])
                                }
                            }
                        }
                        else if (j == 2) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_1[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] >= numberArray_1[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] >= numberArray_1[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i][j] >= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] >= numberArray_1[i][j]) && (numberArray_1[i + 1][j] >= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    else if ((numberArray_1[i + 2][j] >= numberArray_1[i][j]) && (numberArray_1[i + 2][j] >= numberArray_1[i + 1][j])) {
                                        sample.push(numberArray_1[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i][j] >= numberArray_1[i + 2][j])
                                        && (numberArray_1[i][j] >= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] >= numberArray_1[i][j]) && (numberArray_1[i + 1][j] >= numberArray_1[i + 2][j])
                                        && (numberArray_1[i + 1][j] >= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    else if ((numberArray_1[i + 2][j] >= numberArray_1[i][j]) && (numberArray_1[i + 2][j] >= numberArray_1[i + 1][j])
                                        && (numberArray_1[i + 2][j] >= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i + 2][j])
                                    }
                                    else if ((numberArray_1[i + 3][j] >= numberArray_1[i][j]) && (numberArray_1[i + 3][j] >= numberArray_1[i + 1][j])
                                        && (numberArray_1[i + 3][j] >= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_1[i][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i][j] >= numberArray_1[i + 2][j]) && (numberArray_1[i][j] >= numberArray_1[i + 3][j])
                                    && (numberArray_1[i][j] >= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i][j])
                                }
                                else if ((numberArray_1[i + 1][j] >= numberArray_1[i][j]) && (numberArray_1[i + 1][j] >= numberArray_1[i + 2][j]) && (numberArray_1[i + 1][j] >= numberArray_1[i + 3][j])
                                    && (numberArray_1[i + 1][j] >= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 1][j])
                                }
                                else if ((numberArray_1[i + 2][j] >= numberArray_1[i][j]) && (numberArray_1[i + 2][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i + 2][j] >= numberArray_1[i + 3][j])
                                    && (numberArray_1[i + 2][j] >= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 2][j])
                                }
                                else if ((numberArray_1[i + 3][j] >= numberArray_1[i][j]) && (numberArray_1[i + 3][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i + 3][j] >= numberArray_1[i + 2][j])
                                    && (numberArray_1[i + 3][j] >= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 3][j])
                                }
                                else if ((numberArray_1[i + 4][j] >= numberArray_1[i][j]) && (numberArray_1[i + 4][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i + 4][j] >= numberArray_1[i + 2][j])
                                    && (numberArray_1[i + 4][j] >= numberArray_1[i + 3][j])) {
                                    sample.push(numberArray_1[i + 4][j])
                                }
                            }
                        }
                    }
                    if (i < Last_i_position) {
                        // console.log('i=',i)
                        sample.push(numberArray_1[i + 4][4])
                        Chart_Nifty_50_15min.push(sample)
                        sample = []
                        i = i + 4;
                    }
                    else if (i == Last_i_position) {
                        if (Remainder == 1) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_1[i][4])
                            Chart_Nifty_50_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 2) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_1[i + 1][4])
                            Chart_Nifty_50_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 3) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_1[i + 2][4])
                            Chart_Nifty_50_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 4) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_1[i + 3][4])
                            Chart_Nifty_50_15min.push(sample)
                            i = dummy_i_new
                        }
                        console.log('15min Time Frame')
                        console.log(Chart_Nifty_50_15min)
                        i = i + 5;
                    }
                }

                Volume_exp_2_15min = []
                for (var i = 0; i < Array_1_exp_2.length; i++) {
                    Volume_exp_2_15min.push({
                        x: parseFloat(Array_1_exp_2[i][0]), // the date
                        y: parseFloat(Array_1_exp_2[i][1]), // the Volume
                        color: VolumeBarColor(parseFloat(Array_1_exp_2[i][1]))
                    })
                    i = i + 4
                }
                console.log(Volume_exp_2_15min)
            }
            highchart.update({
                title: {
                    text: 'Nifty 50',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_50_15min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_50_15min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_50_15min[i][1] + '<br> High:' + Chart_Nifty_50_15min[i][2] + '<br> Low:' + Chart_Nifty_50_15min[i][3] + '<br> Close:' + Chart_Nifty_50_15min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        // pointWidth: 10,
                        data: Chart_Nifty_50_15min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        // pointWidth: 10,
                        data: Volume_exp_2_15min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            })
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 1 && y == 1) {
            let compare = 0;
            console.log('u r on nifty_bank 2nd expiry')
            if (Counter_for_Nifty_Bank_15min_exp_2 == 0) {
                Counter_for_Nifty_Bank_15min_exp_2 += 1
                Chart_Nifty_Bank_15min = []       // for Candlestick
                sample = []
                numberArray_3 = ohlc_1
                let Quotient = Math.trunc(Chart_Nifty_Bank.length / 5);
                let Remainder = Chart_Nifty_Bank.length % 5;
                let Last_i_position = Quotient * 5;
                for (var i = 0; i < Chart_Nifty_Bank.length; i++) {
                    sample.push(numberArray_3[i][0], numberArray_3[i][1])
                    for (var j = 2; j < 4; j++) {
                        console.log('i = ', i)
                        // console.log('j = ', j)
                        if (j == 3) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_3[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] <= numberArray_3[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] <= numberArray_3[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i][j] <= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] <= numberArray_3[i][j]) && (numberArray_3[i + 1][j] <= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    else if ((numberArray_3[i + 2][j] <= numberArray_3[i][j]) && (numberArray_3[i + 2][j] <= numberArray_3[i + 1][j])) {
                                        sample.push(numberArray_3[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i][j] <= numberArray_3[i + 2][j])
                                        && (numberArray_3[i][j] <= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] <= numberArray_3[i][j]) && (numberArray_3[i + 1][j] <= numberArray_3[i + 2][j])
                                        && (numberArray_3[i + 1][j] <= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    else if ((numberArray_3[i + 2][j] <= numberArray_3[i][j]) && (numberArray_3[i + 2][j] <= numberArray_3[i + 1][j])
                                        && (numberArray_3[i + 2][j] <= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i + 2][j])
                                    }
                                    else if ((numberArray_3[i + 3][j] <= numberArray_3[i][j]) && (numberArray_3[i + 3][j] <= numberArray_3[i + 1][j])
                                        && (numberArray_3[i + 3][j] <= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_3[i][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i][j] <= numberArray_3[i + 2][j]) && (numberArray_3[i][j] <= numberArray_3[i + 3][j])
                                    && (numberArray_3[i][j] <= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i][j])
                                }
                                else if ((numberArray_3[i + 1][j] <= numberArray_3[i][j]) && (numberArray_3[i + 1][j] <= numberArray_3[i + 2][j]) && (numberArray_3[i + 1][j] <= numberArray_3[i + 3][j])
                                    && (numberArray_3[i + 1][j] <= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 1][j])
                                }
                                else if ((numberArray_3[i + 2][j] <= numberArray_3[i][j]) && (numberArray_3[i + 2][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i + 2][j] <= numberArray_3[i + 3][j])
                                    && (numberArray_3[i + 2][j] <= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 2][j])
                                }
                                else if ((numberArray_3[i + 3][j] <= numberArray_3[i][j]) && (numberArray_3[i + 3][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i + 3][j] <= numberArray_3[i + 2][j])
                                    && (numberArray_3[i + 3][j] <= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 3][j])
                                }
                                else if ((numberArray_3[i + 4][j] <= numberArray_3[i][j]) && (numberArray_3[i + 4][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i + 4][j] <= numberArray_3[i + 2][j])
                                    && (numberArray_3[i + 4][j] <= numberArray_3[i + 3][j])) {
                                    sample.push(numberArray_3[i + 4][j])
                                }
                            }
                        }
                        else if (j == 2) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_3[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] >= numberArray_3[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] >= numberArray_3[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i][j] >= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] >= numberArray_3[i][j]) && (numberArray_3[i + 1][j] >= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    else if ((numberArray_3[i + 2][j] >= numberArray_3[i][j]) && (numberArray_3[i + 2][j] >= numberArray_3[i + 1][j])) {
                                        sample.push(numberArray_3[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i][j] >= numberArray_3[i + 2][j])
                                        && (numberArray_3[i][j] >= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] >= numberArray_3[i][j]) && (numberArray_3[i + 1][j] >= numberArray_3[i + 2][j])
                                        && (numberArray_3[i + 1][j] >= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    else if ((numberArray_3[i + 2][j] >= numberArray_3[i][j]) && (numberArray_3[i + 2][j] >= numberArray_3[i + 1][j])
                                        && (numberArray_3[i + 2][j] >= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i + 2][j])
                                    }
                                    else if ((numberArray_3[i + 3][j] >= numberArray_3[i][j]) && (numberArray_3[i + 3][j] >= numberArray_3[i + 1][j])
                                        && (numberArray_3[i + 3][j] >= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_3[i][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i][j] >= numberArray_3[i + 2][j]) && (numberArray_3[i][j] >= numberArray_3[i + 3][j])
                                    && (numberArray_3[i][j] >= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i][j])
                                }
                                else if ((numberArray_3[i + 1][j] >= numberArray_3[i][j]) && (numberArray_3[i + 1][j] >= numberArray_3[i + 2][j]) && (numberArray_3[i + 1][j] >= numberArray_3[i + 3][j])
                                    && (numberArray_3[i + 1][j] >= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 1][j])
                                }
                                else if ((numberArray_3[i + 2][j] >= numberArray_3[i][j]) && (numberArray_3[i + 2][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i + 2][j] >= numberArray_3[i + 3][j])
                                    && (numberArray_3[i + 2][j] >= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 2][j])
                                }
                                else if ((numberArray_3[i + 3][j] >= numberArray_3[i][j]) && (numberArray_3[i + 3][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i + 3][j] >= numberArray_3[i + 2][j])
                                    && (numberArray_3[i + 3][j] >= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 3][j])
                                }
                                else if ((numberArray_3[i + 4][j] >= numberArray_3[i][j]) && (numberArray_3[i + 4][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i + 4][j] >= numberArray_3[i + 2][j])
                                    && (numberArray_3[i + 4][j] >= numberArray_3[i + 3][j])) {
                                    sample.push(numberArray_3[i + 4][j])
                                }
                            }
                        }
                    }
                    if (i < Last_i_position) {
                        // console.log('i=',i)
                        sample.push(numberArray_3[i + 4][4])
                        Chart_Nifty_Bank_15min.push(sample)
                        sample = []
                        i = i + 4;
                    }
                    else if (i == Last_i_position) {
                        if (Remainder == 1) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_3[i][4])
                            Chart_Nifty_Bank_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 2) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_3[i + 1][4])
                            Chart_Nifty_Bank_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 3) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_3[i + 2][4])
                            Chart_Nifty_Bank_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 4) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_3[i + 3][4])
                            Chart_Nifty_Bank_15min.push(sample)
                            i = dummy_i_new
                        }
                        console.log('15min Time Frame')
                        console.log(Chart_Nifty_Bank_15min)
                        i = i + 5;
                    }
                }

                Volume_1_exp_2_15min = []
                for (var i = 0; i < Array_3_exp_2.length; i++) {
                    Volume_1_exp_2_15min.push({
                        x: parseFloat(Array_3_exp_2[i][0]), // the date
                        y: parseFloat(Array_3_exp_2[i][1]), // the Volume
                        color: VolumeBarColor(parseFloat(Array_3_exp_2[i][1]))
                    })
                    i = i + 4
                }
                console.log(Volume_1_exp_2_15min)
            }

            highchart.update({
                title: {
                    text: 'Nifty Bank',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_Bank_15min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_Bank_15min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_Bank_15min[i][1] + '<br> High:' + Chart_Nifty_Bank_15min[i][2] + '<br> Low:' + Chart_Nifty_Bank_15min[i][3] + '<br> Close:' + Chart_Nifty_Bank_15min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        // pointWidth: 10,
                        data: Chart_Nifty_Bank_15min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        // pointWidth: 10,
                        data: Volume_1_exp_2_15min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            })
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 1 && y == 1) {
            let compare = 0;
            console.log('u r on nifty_fin_service 2nd expiry')
            if (Counter_for_Nifty_Fin_Service_15min_exp_2 == 0) {
                Counter_for_Nifty_Fin_Service_15min_exp_2 += 1
                Chart_Nifty_Fin_Service_15min = []       // for Candlestick
                sample = []
                numberArray_5 = ohlc_2
                let Quotient = Math.trunc(Chart_Nifty_Fin_Service.length / 5);
                let Remainder = Chart_Nifty_Fin_Service.length % 5;
                let Last_i_position = Quotient * 5;
                for (var i = 0; i < Chart_Nifty_Fin_Service.length; i++) {
                    sample.push(numberArray_5[i][0], numberArray_5[i][1])
                    for (var j = 2; j < 4; j++) {
                        console.log('i = ', i)
                        // console.log('j = ', j)
                        if (j == 3) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_5[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] <= numberArray_5[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] <= numberArray_5[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i][j] <= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] <= numberArray_5[i][j]) && (numberArray_5[i + 1][j] <= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    else if ((numberArray_5[i + 2][j] <= numberArray_5[i][j]) && (numberArray_5[i + 2][j] <= numberArray_5[i + 1][j])) {
                                        sample.push(numberArray_5[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i][j] <= numberArray_5[i + 2][j])
                                        && (numberArray_5[i][j] <= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] <= numberArray_5[i][j]) && (numberArray_5[i + 1][j] <= numberArray_5[i + 2][j])
                                        && (numberArray_5[i + 1][j] <= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    else if ((numberArray_5[i + 2][j] <= numberArray_5[i][j]) && (numberArray_5[i + 2][j] <= numberArray_5[i + 1][j])
                                        && (numberArray_5[i + 2][j] <= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i + 2][j])
                                    }
                                    else if ((numberArray_5[i + 3][j] <= numberArray_5[i][j]) && (numberArray_5[i + 3][j] <= numberArray_5[i + 1][j])
                                        && (numberArray_5[i + 3][j] <= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_5[i][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i][j] <= numberArray_5[i + 2][j]) && (numberArray_5[i][j] <= numberArray_5[i + 3][j])
                                    && (numberArray_5[i][j] <= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i][j])
                                }
                                else if ((numberArray_5[i + 1][j] <= numberArray_5[i][j]) && (numberArray_5[i + 1][j] <= numberArray_5[i + 2][j]) && (numberArray_5[i + 1][j] <= numberArray_5[i + 3][j])
                                    && (numberArray_5[i + 1][j] <= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 1][j])
                                }
                                else if ((numberArray_5[i + 2][j] <= numberArray_5[i][j]) && (numberArray_5[i + 2][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i + 2][j] <= numberArray_5[i + 3][j])
                                    && (numberArray_5[i + 2][j] <= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 2][j])
                                }
                                else if ((numberArray_5[i + 3][j] <= numberArray_5[i][j]) && (numberArray_5[i + 3][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i + 3][j] <= numberArray_5[i + 2][j])
                                    && (numberArray_5[i + 3][j] <= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 3][j])
                                }
                                else if ((numberArray_5[i + 4][j] <= numberArray_5[i][j]) && (numberArray_5[i + 4][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i + 4][j] <= numberArray_5[i + 2][j])
                                    && (numberArray_5[i + 4][j] <= numberArray_5[i + 3][j])) {
                                    sample.push(numberArray_5[i + 4][j])
                                }
                            }
                        }
                        else if (j == 2) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_5[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] >= numberArray_5[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] >= numberArray_5[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i][j] >= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] >= numberArray_5[i][j]) && (numberArray_5[i + 1][j] >= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    else if ((numberArray_5[i + 2][j] >= numberArray_5[i][j]) && (numberArray_5[i + 2][j] >= numberArray_5[i + 1][j])) {
                                        sample.push(numberArray_5[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i][j] >= numberArray_5[i + 2][j])
                                        && (numberArray_5[i][j] >= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] >= numberArray_5[i][j]) && (numberArray_5[i + 1][j] >= numberArray_5[i + 2][j])
                                        && (numberArray_5[i + 1][j] >= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    else if ((numberArray_5[i + 2][j] >= numberArray_5[i][j]) && (numberArray_5[i + 2][j] >= numberArray_5[i + 1][j])
                                        && (numberArray_5[i + 2][j] >= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i + 2][j])
                                    }
                                    else if ((numberArray_5[i + 3][j] >= numberArray_5[i][j]) && (numberArray_5[i + 3][j] >= numberArray_5[i + 1][j])
                                        && (numberArray_5[i + 3][j] >= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_5[i][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i][j] >= numberArray_5[i + 2][j]) && (numberArray_5[i][j] >= numberArray_5[i + 3][j])
                                    && (numberArray_5[i][j] >= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i][j])
                                }
                                else if ((numberArray_5[i + 1][j] >= numberArray_5[i][j]) && (numberArray_5[i + 1][j] >= numberArray_5[i + 2][j]) && (numberArray_5[i + 1][j] >= numberArray_5[i + 3][j])
                                    && (numberArray_5[i + 1][j] >= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 1][j])
                                }
                                else if ((numberArray_5[i + 2][j] >= numberArray_5[i][j]) && (numberArray_5[i + 2][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i + 2][j] >= numberArray_5[i + 3][j])
                                    && (numberArray_5[i + 2][j] >= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 2][j])
                                }
                                else if ((numberArray_5[i + 3][j] >= numberArray_5[i][j]) && (numberArray_5[i + 3][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i + 3][j] >= numberArray_5[i + 2][j])
                                    && (numberArray_5[i + 3][j] >= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 3][j])
                                }
                                else if ((numberArray_5[i + 4][j] >= numberArray_5[i][j]) && (numberArray_5[i + 4][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i + 4][j] >= numberArray_5[i + 2][j])
                                    && (numberArray_5[i + 4][j] >= numberArray_5[i + 3][j])) {
                                    sample.push(numberArray_5[i + 4][j])
                                }
                            }
                        }
                    }
                    if (i < Last_i_position) {
                        // console.log('i=',i)
                        sample.push(numberArray_5[i + 4][4])
                        Chart_Nifty_Fin_Service_15min.push(sample)
                        sample = []
                        i = i + 4;
                    }
                    else if (i == Last_i_position) {
                        if (Remainder == 1) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_5[i][4])
                            Chart_Nifty_Fin_Service_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 2) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_5[i + 1][4])
                            Chart_Nifty_Fin_Service_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 3) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_5[i + 2][4])
                            Chart_Nifty_Fin_Service_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 4) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_5[i + 3][4])
                            Chart_Nifty_Fin_Service_15min.push(sample)
                            i = dummy_i_new
                        }
                        console.log('15min Time Frame')
                        console.log(Chart_Nifty_Fin_Service_15min)
                        i = i + 5;
                    }
                }

                Volume_2_exp_2_15min = []
                for (var i = 0; i < Array_5_exp_2.length; i++) {
                    Volume_2_exp_2_15min.push({
                        x: parseFloat(Array_5_exp_2[i][0]), // the date
                        y: parseFloat(Array_5_exp_2[i][1]), // the Volume
                        color: VolumeBarColor(parseFloat(Array_5_exp_2[i][1]))
                    })
                    i = i + 4
                }
                console.log(Volume_2_exp_2_15min)
            }

            highchart.update({
                title: {
                    text: 'Nifty Fin Service',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_Fin_Service_15min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_Fin_Service_15min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_Fin_Service_15min[i][1] + '<br> High:' + Chart_Nifty_Fin_Service_15min[i][2] + '<br> Low:' + Chart_Nifty_Fin_Service_15min[i][3] + '<br> Close:' + Chart_Nifty_Fin_Service_15min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        // pointWidth: 10,
                        data: Chart_Nifty_Fin_Service_15min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        // pointWidth: 10,
                        data: Volume_2_exp_2_15min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            })
        }
        if ($('#nifty_btn').hasClass('gb_active') && x == 2 && y == 1) {
            let compare = 0;
            console.log('u r on nifty_50 2nd expiry')
            if (Counter_for_Nifty_50_30min_exp_2 == 0) {
                Counter_for_Nifty_50_30min_exp_2 += 1
                Chart_Nifty_50_15min = []       // for Candlestick
                Chart_Nifty_50_30min = []       // for Candlestick
                sample = []
                sample_1 = []
                numberArray_1 = ohlc
                let Quotient = Math.trunc(Chart_Nifty_50.length / 5);
                let Remainder = Chart_Nifty_50.length % 5;
                let Last_i_position = Quotient * 5;
                for (var i = 0; i < Chart_Nifty_50.length; i++) {
                    sample.push(numberArray_1[i][0], numberArray_1[i][1])
                    for (var j = 2; j < 4; j++) {
                        console.log('i = ', i)
                        // console.log('j = ', j)
                        if (j == 3) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_1[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] <= numberArray_1[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] <= numberArray_1[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i][j] <= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] <= numberArray_1[i][j]) && (numberArray_1[i + 1][j] <= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    else if ((numberArray_1[i + 2][j] <= numberArray_1[i][j]) && (numberArray_1[i + 2][j] <= numberArray_1[i + 1][j])) {
                                        sample.push(numberArray_1[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i][j] <= numberArray_1[i + 2][j])
                                        && (numberArray_1[i][j] <= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] <= numberArray_1[i][j]) && (numberArray_1[i + 1][j] <= numberArray_1[i + 2][j])
                                        && (numberArray_1[i + 1][j] <= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    else if ((numberArray_1[i + 2][j] <= numberArray_1[i][j]) && (numberArray_1[i + 2][j] <= numberArray_1[i + 1][j])
                                        && (numberArray_1[i + 2][j] <= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i + 2][j])
                                    }
                                    else if ((numberArray_1[i + 3][j] <= numberArray_1[i][j]) && (numberArray_1[i + 3][j] <= numberArray_1[i + 1][j])
                                        && (numberArray_1[i + 3][j] <= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_1[i][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i][j] <= numberArray_1[i + 2][j]) && (numberArray_1[i][j] <= numberArray_1[i + 3][j])
                                    && (numberArray_1[i][j] <= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i][j])
                                }
                                else if ((numberArray_1[i + 1][j] <= numberArray_1[i][j]) && (numberArray_1[i + 1][j] <= numberArray_1[i + 2][j]) && (numberArray_1[i + 1][j] <= numberArray_1[i + 3][j])
                                    && (numberArray_1[i + 1][j] <= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 1][j])
                                }
                                else if ((numberArray_1[i + 2][j] <= numberArray_1[i][j]) && (numberArray_1[i + 2][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i + 2][j] <= numberArray_1[i + 3][j])
                                    && (numberArray_1[i + 2][j] <= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 2][j])
                                }
                                else if ((numberArray_1[i + 3][j] <= numberArray_1[i][j]) && (numberArray_1[i + 3][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i + 3][j] <= numberArray_1[i + 2][j])
                                    && (numberArray_1[i + 3][j] <= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 3][j])
                                }
                                else if ((numberArray_1[i + 4][j] <= numberArray_1[i][j]) && (numberArray_1[i + 4][j] <= numberArray_1[i + 1][j]) && (numberArray_1[i + 4][j] <= numberArray_1[i + 2][j])
                                    && (numberArray_1[i + 4][j] <= numberArray_1[i + 3][j])) {
                                    sample.push(numberArray_1[i + 4][j])
                                }
                            }
                        }
                        else if (j == 2) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_1[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] >= numberArray_1[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] >= numberArray_1[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i][j] >= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] >= numberArray_1[i][j]) && (numberArray_1[i + 1][j] >= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    else if ((numberArray_1[i + 2][j] >= numberArray_1[i][j]) && (numberArray_1[i + 2][j] >= numberArray_1[i + 1][j])) {
                                        sample.push(numberArray_1[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_1[i][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i][j] >= numberArray_1[i + 2][j])
                                        && (numberArray_1[i][j] >= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i][j])
                                    }
                                    else if ((numberArray_1[i + 1][j] >= numberArray_1[i][j]) && (numberArray_1[i + 1][j] >= numberArray_1[i + 2][j])
                                        && (numberArray_1[i + 1][j] >= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i + 1][j])
                                    }
                                    else if ((numberArray_1[i + 2][j] >= numberArray_1[i][j]) && (numberArray_1[i + 2][j] >= numberArray_1[i + 1][j])
                                        && (numberArray_1[i + 2][j] >= numberArray_1[i + 3][j])) {
                                        sample.push(numberArray_1[i + 2][j])
                                    }
                                    else if ((numberArray_1[i + 3][j] >= numberArray_1[i][j]) && (numberArray_1[i + 3][j] >= numberArray_1[i + 1][j])
                                        && (numberArray_1[i + 3][j] >= numberArray_1[i + 2][j])) {
                                        sample.push(numberArray_1[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_1[i][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i][j] >= numberArray_1[i + 2][j]) && (numberArray_1[i][j] >= numberArray_1[i + 3][j])
                                    && (numberArray_1[i][j] >= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i][j])
                                }
                                else if ((numberArray_1[i + 1][j] >= numberArray_1[i][j]) && (numberArray_1[i + 1][j] >= numberArray_1[i + 2][j]) && (numberArray_1[i + 1][j] >= numberArray_1[i + 3][j])
                                    && (numberArray_1[i + 1][j] >= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 1][j])
                                }
                                else if ((numberArray_1[i + 2][j] >= numberArray_1[i][j]) && (numberArray_1[i + 2][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i + 2][j] >= numberArray_1[i + 3][j])
                                    && (numberArray_1[i + 2][j] >= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 2][j])
                                }
                                else if ((numberArray_1[i + 3][j] >= numberArray_1[i][j]) && (numberArray_1[i + 3][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i + 3][j] >= numberArray_1[i + 2][j])
                                    && (numberArray_1[i + 3][j] >= numberArray_1[i + 4][j])) {
                                    sample.push(numberArray_1[i + 3][j])
                                }
                                else if ((numberArray_1[i + 4][j] >= numberArray_1[i][j]) && (numberArray_1[i + 4][j] >= numberArray_1[i + 1][j]) && (numberArray_1[i + 4][j] >= numberArray_1[i + 2][j])
                                    && (numberArray_1[i + 4][j] >= numberArray_1[i + 3][j])) {
                                    sample.push(numberArray_1[i + 4][j])
                                }
                            }
                        }
                    }
                    if (i < Last_i_position) {
                        // console.log('i=',i)
                        sample.push(numberArray_1[i + 4][4])
                        Chart_Nifty_50_15min.push(sample)
                        sample = []
                        i = i + 4;
                    }
                    else if (i == Last_i_position) {
                        if (Remainder == 1) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_1[i][4])
                            Chart_Nifty_50_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 2) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_1[i + 1][4])
                            Chart_Nifty_50_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 3) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_1[i + 2][4])
                            Chart_Nifty_50_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 4) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_1[i + 3][4])
                            Chart_Nifty_50_15min.push(sample)
                            i = dummy_i_new
                        }
                        console.log('30min Time Frame')
                        console.log(Chart_Nifty_50_30min)
                        i = i + 5;
                    }
                }
                let Quotient_New = Math.trunc(Chart_Nifty_50_15min.length / 2);
                let Remainder_New = Chart_Nifty_50_15min.length % 2;
                let Last_i_position_New = Quotient_New * 2;
                console.log('Quotient_New = ', Quotient_New)
                for (var i = 0; i < Chart_Nifty_50_15min.length; i++) {
                    sample_1.push(Chart_Nifty_50_15min[i][0], Chart_Nifty_50_15min[i][1])
                    for (var j = 2; j < 4; j++) {
                        console.log('i = ', i)
                        // console.log('j = ', j)
                        if (j == 3) {
                            if (i == Last_i_position_New) {
                                if (Remainder_New == 1) {
                                    dummy_i = i;
                                    i = Last_i_position_New
                                    // console.log('Remainder = ', Remainder)
                                    sample_1.push(Chart_Nifty_50_15min[i][j])
                                    i = dummy_i;
                                }
                            }
                            else {
                                if ((Chart_Nifty_50_15min[i][j] <= Chart_Nifty_50_15min[i + 1][j])) {
                                    sample_1.push(Chart_Nifty_50_15min[i][j])
                                }
                                else if ((Chart_Nifty_50_15min[i + 1][j] <= Chart_Nifty_50_15min[i][j])) {
                                    sample_1.push(Chart_Nifty_50_15min[i + 1][j])
                                }
                            }
                        }
                        else if (j == 2) {
                            if (i == Last_i_position_New) {
                                if (Remainder_New == 1) {
                                    dummy_i = i;
                                    i = Last_i_position_New
                                    // console.log('Remainder = ', Remainder)
                                    sample_1.push(Chart_Nifty_50_15min[i][j])
                                    i = dummy_i;
                                }
                            }
                            else {
                                if ((Chart_Nifty_50_15min[i][j] >= Chart_Nifty_50_15min[i + 1][j])) {
                                    sample_1.push(Chart_Nifty_50_15min[i][j])
                                }
                                else if ((Chart_Nifty_50_15min[i + 1][j] >= Chart_Nifty_50_15min[i][j])) {
                                    sample_1.push(Chart_Nifty_50_15min[i + 1][j])
                                }
                            }
                        }
                    }
                    if (i < Last_i_position_New) {
                        // console.log('i=',i)
                        sample_1.push(Chart_Nifty_50_15min[i + 1][4])
                        Chart_Nifty_50_30min.push(sample_1)
                        sample_1 = []
                        i = i + 1;
                    }
                    else if (i == Last_i_position_New) {
                        if (Remainder_New == 1) {
                            dummy_i_new = i;
                            i = Last_i_position_New
                            sample_1.push(Chart_Nifty_50_15min[i][4])
                            Chart_Nifty_50_30min.push(sample_1)
                            i = dummy_i_new
                        }
                        console.log('30min Time Frame')
                        console.log(Chart_Nifty_50_30min)
                        // i = i + 2
                    }
                }

                Volume_exp_2_30min = []
                for (var i = 0; i < Array_1_exp_2.length; i++) {
                    Volume_exp_2_30min.push({
                        x: parseFloat(Array_1_exp_2[i][0]), // the date
                        y: parseFloat(Array_1_exp_2[i][1]), // the Volume
                        color: VolumeBarColor(parseFloat(Array_1_exp_2[i][1]))
                    })
                    i = i + 9
                }
                // console.log(Array_1_30min)
            }
            highchart.update({
                title: {
                    text: 'Nifty 50',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_50_30min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_50_30min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_50_30min[i][1] + '<br> High:' + Chart_Nifty_50_30min[i][2] + '<br> Low:' + Chart_Nifty_50_30min[i][3] + '<br> Close:' + Chart_Nifty_50_30min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        // pointWidth: 10,
                        data: Chart_Nifty_50_30min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        // pointWidth: 10,
                        data: Volume_exp_2_30min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            })
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 2 && y == 1) {
            let compare = 0;
            console.log('u r on nifty_bank 2nd expiry')
            if (Counter_for_Nifty_Bank_30min_exp_2 == 0) {
                Counter_for_Nifty_Bank_30min_exp_2 += 1
                Chart_Nifty_Bank_15min = []       // for Candlestick
                Chart_Nifty_Bank_30min = []       // for Candlestick
                sample_1 = []
                sample = []
                numberArray_3 = ohlc_1
                let Quotient = Math.trunc(Chart_Nifty_Bank.length / 5);
                let Remainder = Chart_Nifty_Bank.length % 5;
                let Last_i_position = Quotient * 5;
                for (var i = 0; i < Chart_Nifty_Bank.length; i++) {
                    sample.push(numberArray_3[i][0], numberArray_3[i][1])
                    for (var j = 2; j < 4; j++) {
                        console.log('i = ', i)
                        // console.log('j = ', j)
                        if (j == 3) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_3[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] <= numberArray_3[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] <= numberArray_3[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i][j] <= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] <= numberArray_3[i][j]) && (numberArray_3[i + 1][j] <= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    else if ((numberArray_3[i + 2][j] <= numberArray_3[i][j]) && (numberArray_3[i + 2][j] <= numberArray_3[i + 1][j])) {
                                        sample.push(numberArray_3[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i][j] <= numberArray_3[i + 2][j])
                                        && (numberArray_3[i][j] <= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] <= numberArray_3[i][j]) && (numberArray_3[i + 1][j] <= numberArray_3[i + 2][j])
                                        && (numberArray_3[i + 1][j] <= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    else if ((numberArray_3[i + 2][j] <= numberArray_3[i][j]) && (numberArray_3[i + 2][j] <= numberArray_3[i + 1][j])
                                        && (numberArray_3[i + 2][j] <= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i + 2][j])
                                    }
                                    else if ((numberArray_3[i + 3][j] <= numberArray_3[i][j]) && (numberArray_3[i + 3][j] <= numberArray_3[i + 1][j])
                                        && (numberArray_3[i + 3][j] <= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_3[i][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i][j] <= numberArray_3[i + 2][j]) && (numberArray_3[i][j] <= numberArray_3[i + 3][j])
                                    && (numberArray_3[i][j] <= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i][j])
                                }
                                else if ((numberArray_3[i + 1][j] <= numberArray_3[i][j]) && (numberArray_3[i + 1][j] <= numberArray_3[i + 2][j]) && (numberArray_3[i + 1][j] <= numberArray_3[i + 3][j])
                                    && (numberArray_3[i + 1][j] <= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 1][j])
                                }
                                else if ((numberArray_3[i + 2][j] <= numberArray_3[i][j]) && (numberArray_3[i + 2][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i + 2][j] <= numberArray_3[i + 3][j])
                                    && (numberArray_3[i + 2][j] <= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 2][j])
                                }
                                else if ((numberArray_3[i + 3][j] <= numberArray_3[i][j]) && (numberArray_3[i + 3][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i + 3][j] <= numberArray_3[i + 2][j])
                                    && (numberArray_3[i + 3][j] <= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 3][j])
                                }
                                else if ((numberArray_3[i + 4][j] <= numberArray_3[i][j]) && (numberArray_3[i + 4][j] <= numberArray_3[i + 1][j]) && (numberArray_3[i + 4][j] <= numberArray_3[i + 2][j])
                                    && (numberArray_3[i + 4][j] <= numberArray_3[i + 3][j])) {
                                    sample.push(numberArray_3[i + 4][j])
                                }
                            }
                        }
                        else if (j == 2) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_3[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] >= numberArray_3[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] >= numberArray_3[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i][j] >= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] >= numberArray_3[i][j]) && (numberArray_3[i + 1][j] >= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    else if ((numberArray_3[i + 2][j] >= numberArray_3[i][j]) && (numberArray_3[i + 2][j] >= numberArray_3[i + 1][j])) {
                                        sample.push(numberArray_3[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_3[i][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i][j] >= numberArray_3[i + 2][j])
                                        && (numberArray_3[i][j] >= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i][j])
                                    }
                                    else if ((numberArray_3[i + 1][j] >= numberArray_3[i][j]) && (numberArray_3[i + 1][j] >= numberArray_3[i + 2][j])
                                        && (numberArray_3[i + 1][j] >= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i + 1][j])
                                    }
                                    else if ((numberArray_3[i + 2][j] >= numberArray_3[i][j]) && (numberArray_3[i + 2][j] >= numberArray_3[i + 1][j])
                                        && (numberArray_3[i + 2][j] >= numberArray_3[i + 3][j])) {
                                        sample.push(numberArray_3[i + 2][j])
                                    }
                                    else if ((numberArray_3[i + 3][j] >= numberArray_3[i][j]) && (numberArray_3[i + 3][j] >= numberArray_3[i + 1][j])
                                        && (numberArray_3[i + 3][j] >= numberArray_3[i + 2][j])) {
                                        sample.push(numberArray_3[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_3[i][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i][j] >= numberArray_3[i + 2][j]) && (numberArray_3[i][j] >= numberArray_3[i + 3][j])
                                    && (numberArray_3[i][j] >= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i][j])
                                }
                                else if ((numberArray_3[i + 1][j] >= numberArray_3[i][j]) && (numberArray_3[i + 1][j] >= numberArray_3[i + 2][j]) && (numberArray_3[i + 1][j] >= numberArray_3[i + 3][j])
                                    && (numberArray_3[i + 1][j] >= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 1][j])
                                }
                                else if ((numberArray_3[i + 2][j] >= numberArray_3[i][j]) && (numberArray_3[i + 2][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i + 2][j] >= numberArray_3[i + 3][j])
                                    && (numberArray_3[i + 2][j] >= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 2][j])
                                }
                                else if ((numberArray_3[i + 3][j] >= numberArray_3[i][j]) && (numberArray_3[i + 3][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i + 3][j] >= numberArray_3[i + 2][j])
                                    && (numberArray_3[i + 3][j] >= numberArray_3[i + 4][j])) {
                                    sample.push(numberArray_3[i + 3][j])
                                }
                                else if ((numberArray_3[i + 4][j] >= numberArray_3[i][j]) && (numberArray_3[i + 4][j] >= numberArray_3[i + 1][j]) && (numberArray_3[i + 4][j] >= numberArray_3[i + 2][j])
                                    && (numberArray_3[i + 4][j] >= numberArray_3[i + 3][j])) {
                                    sample.push(numberArray_3[i + 4][j])
                                }
                            }
                        }
                    }
                    if (i < Last_i_position) {
                        // console.log('i=',i)
                        sample.push(numberArray_3[i + 4][4])
                        Chart_Nifty_Bank_15min.push(sample)
                        sample = []
                        i = i + 4;
                    }
                    else if (i == Last_i_position) {
                        if (Remainder == 1) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_3[i][4])
                            Chart_Nifty_Bank_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 2) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_3[i + 1][4])
                            Chart_Nifty_Bank_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 3) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_3[i + 2][4])
                            Chart_Nifty_Bank_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 4) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_3[i + 3][4])
                            Chart_Nifty_Bank_15min.push(sample)
                            i = dummy_i_new
                        }
                        console.log('15min Time Frame')
                        console.log(Chart_Nifty_Bank_15min)
                        i = i + 5;
                    }
                }
                let Quotient_New = Math.trunc(Chart_Nifty_Bank_15min.length / 2);
                let Remainder_New = Chart_Nifty_Bank_15min.length % 2;
                let Last_i_position_New = Quotient_New * 2;
                console.log('Quotient_New = ', Quotient_New)
                for (var i = 0; i < Chart_Nifty_Bank_15min.length; i++) {
                    sample_1.push(Chart_Nifty_Bank_15min[i][0], Chart_Nifty_Bank_15min[i][1])
                    for (var j = 2; j < 4; j++) {
                        console.log('i = ', i)
                        // console.log('j = ', j)
                        if (j == 3) {
                            if (i == Last_i_position_New) {
                                if (Remainder_New == 1) {
                                    dummy_i = i;
                                    i = Last_i_position_New
                                    // console.log('Remainder = ', Remainder)
                                    sample_1.push(Chart_Nifty_Bank_15min[i][j])
                                    i = dummy_i;
                                }
                            }
                            else {
                                if ((Chart_Nifty_Bank_15min[i][j] <= Chart_Nifty_Bank_15min[i + 1][j])) {
                                    sample_1.push(Chart_Nifty_Bank_15min[i][j])
                                }
                                else if ((Chart_Nifty_Bank_15min[i + 1][j] <= Chart_Nifty_Bank_15min[i][j])) {
                                    sample_1.push(Chart_Nifty_Bank_15min[i + 1][j])
                                }
                            }
                        }
                        else if (j == 2) {
                            if (i == Last_i_position_New) {
                                if (Remainder_New == 1) {
                                    dummy_i = i;
                                    i = Last_i_position_New
                                    // console.log('Remainder = ', Remainder)
                                    sample_1.push(Chart_Nifty_Bank_15min[i][j])
                                    i = dummy_i;
                                }
                            }
                            else {
                                if ((Chart_Nifty_Bank_15min[i][j] >= Chart_Nifty_Bank_15min[i + 1][j])) {
                                    sample_1.push(Chart_Nifty_Bank_15min[i][j])
                                }
                                else if ((Chart_Nifty_Bank_15min[i + 1][j] >= Chart_Nifty_Bank_15min[i][j])) {
                                    sample_1.push(Chart_Nifty_Bank_15min[i + 1][j])
                                }
                            }
                        }
                    }
                    if (i < Last_i_position_New) {
                        // console.log('i=',i)
                        sample_1.push(Chart_Nifty_Bank_15min[i + 1][4])
                        Chart_Nifty_Bank_30min.push(sample_1)
                        sample_1 = []
                        i = i + 1;
                    }
                    else if (i == Last_i_position_New) {
                        if (Remainder_New == 1) {
                            dummy_i_new = i;
                            i = Last_i_position_New
                            sample_1.push(Chart_Nifty_Bank_15min[i][4])
                            Chart_Nifty_Bank_30min.push(sample_1)
                            i = dummy_i_new
                        }
                        console.log('30min Time Frame')
                        console.log(Chart_Nifty_Bank_30min)
                        // i = i + 2
                    }
                }
                Volume_1_exp_2_30min = []
                for (var i = 0; i < Array_3_exp_2.length; i++) {
                    Volume_1_exp_2_30min.push({
                        x: parseFloat(Array_3_exp_2[i][0]), // the date
                        y: parseFloat(Array_3_exp_2[i][1]), // the Volume
                        color: VolumeBarColor(parseFloat(Array_3_exp_2[i][1]))
                    })
                    i = i + 9
                }
            }

            highchart.update({
                title: {
                    text: 'Nifty Bank',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_Bank_30min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_Bank_30min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_Bank_30min[i][1] + '<br> High:' + Chart_Nifty_Bank_30min[i][2] + '<br> Low:' + Chart_Nifty_Bank_30min[i][3] + '<br> Close:' + Chart_Nifty_Bank_30min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        // pointWidth: 10,
                        data: Chart_Nifty_Bank_30min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        // pointWidth: 10,
                        data: Volume_1_exp_2_30min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            })
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 2 && y == 1) {
            let compare = 0;
            console.log('u r on nifty_fin_service 2nd expiry')
            if (Counter_for_Nifty_Fin_Service_30min_exp_2 == 0) {
                Counter_for_Nifty_Fin_Service_30min_exp_2 += 1
                Chart_Nifty_Fin_Service_15min = []       // for Candlestick
                Chart_Nifty_Fin_Service_30min = []       // for Candlestick
                sample_1 = []
                sample = []
                numberArray_5 = ohlc_2
                let Quotient = Math.trunc(Chart_Nifty_Fin_Service.length / 5);
                let Remainder = Chart_Nifty_Fin_Service.length % 5;
                let Last_i_position = Quotient * 5;
                for (var i = 0; i < Chart_Nifty_Fin_Service.length; i++) {
                    sample.push(numberArray_5[i][0], numberArray_5[i][1])
                    for (var j = 2; j < 4; j++) {
                        console.log('i = ', i)
                        // console.log('j = ', j)
                        if (j == 3) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_5[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] <= numberArray_5[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] <= numberArray_5[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i][j] <= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] <= numberArray_5[i][j]) && (numberArray_5[i + 1][j] <= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    else if ((numberArray_5[i + 2][j] <= numberArray_5[i][j]) && (numberArray_5[i + 2][j] <= numberArray_5[i + 1][j])) {
                                        sample.push(numberArray_5[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i][j] <= numberArray_5[i + 2][j])
                                        && (numberArray_5[i][j] <= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] <= numberArray_5[i][j]) && (numberArray_5[i + 1][j] <= numberArray_5[i + 2][j])
                                        && (numberArray_5[i + 1][j] <= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    else if ((numberArray_5[i + 2][j] <= numberArray_5[i][j]) && (numberArray_5[i + 2][j] <= numberArray_5[i + 1][j])
                                        && (numberArray_5[i + 2][j] <= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i + 2][j])
                                    }
                                    else if ((numberArray_5[i + 3][j] <= numberArray_5[i][j]) && (numberArray_5[i + 3][j] <= numberArray_5[i + 1][j])
                                        && (numberArray_5[i + 3][j] <= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_5[i][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i][j] <= numberArray_5[i + 2][j]) && (numberArray_5[i][j] <= numberArray_5[i + 3][j])
                                    && (numberArray_5[i][j] <= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i][j])
                                }
                                else if ((numberArray_5[i + 1][j] <= numberArray_5[i][j]) && (numberArray_5[i + 1][j] <= numberArray_5[i + 2][j]) && (numberArray_5[i + 1][j] <= numberArray_5[i + 3][j])
                                    && (numberArray_5[i + 1][j] <= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 1][j])
                                }
                                else if ((numberArray_5[i + 2][j] <= numberArray_5[i][j]) && (numberArray_5[i + 2][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i + 2][j] <= numberArray_5[i + 3][j])
                                    && (numberArray_5[i + 2][j] <= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 2][j])
                                }
                                else if ((numberArray_5[i + 3][j] <= numberArray_5[i][j]) && (numberArray_5[i + 3][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i + 3][j] <= numberArray_5[i + 2][j])
                                    && (numberArray_5[i + 3][j] <= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 3][j])
                                }
                                else if ((numberArray_5[i + 4][j] <= numberArray_5[i][j]) && (numberArray_5[i + 4][j] <= numberArray_5[i + 1][j]) && (numberArray_5[i + 4][j] <= numberArray_5[i + 2][j])
                                    && (numberArray_5[i + 4][j] <= numberArray_5[i + 3][j])) {
                                    sample.push(numberArray_5[i + 4][j])
                                }
                            }
                        }
                        else if (j == 2) {
                            if (i == Last_i_position) {
                                if (Remainder == 1) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    sample.push(numberArray_5[i][j])
                                    i = dummy_i;
                                }
                                else if (Remainder == 2) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] >= numberArray_5[i + 1][j])) {
                                        console.log('entered in if')
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] >= numberArray_5[i][j])) {
                                        console.log('entered in else')
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 3) {
                                    dummy_i = i;
                                    i = Last_i_position
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i][j] >= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] >= numberArray_5[i][j]) && (numberArray_5[i + 1][j] >= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    else if ((numberArray_5[i + 2][j] >= numberArray_5[i][j]) && (numberArray_5[i + 2][j] >= numberArray_5[i + 1][j])) {
                                        sample.push(numberArray_5[i + 2][j])
                                    }
                                    i = dummy_i;
                                }
                                else if (Remainder == 4) {
                                    // console.log('Remainder = ', Remainder)
                                    if ((numberArray_5[i][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i][j] >= numberArray_5[i + 2][j])
                                        && (numberArray_5[i][j] >= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i][j])
                                    }
                                    else if ((numberArray_5[i + 1][j] >= numberArray_5[i][j]) && (numberArray_5[i + 1][j] >= numberArray_5[i + 2][j])
                                        && (numberArray_5[i + 1][j] >= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i + 1][j])
                                    }
                                    else if ((numberArray_5[i + 2][j] >= numberArray_5[i][j]) && (numberArray_5[i + 2][j] >= numberArray_5[i + 1][j])
                                        && (numberArray_5[i + 2][j] >= numberArray_5[i + 3][j])) {
                                        sample.push(numberArray_5[i + 2][j])
                                    }
                                    else if ((numberArray_5[i + 3][j] >= numberArray_5[i][j]) && (numberArray_5[i + 3][j] >= numberArray_5[i + 1][j])
                                        && (numberArray_5[i + 3][j] >= numberArray_5[i + 2][j])) {
                                        sample.push(numberArray_5[i + 3][j])
                                    }
                                }
                            }
                            else {
                                if ((numberArray_5[i][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i][j] >= numberArray_5[i + 2][j]) && (numberArray_5[i][j] >= numberArray_5[i + 3][j])
                                    && (numberArray_5[i][j] >= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i][j])
                                }
                                else if ((numberArray_5[i + 1][j] >= numberArray_5[i][j]) && (numberArray_5[i + 1][j] >= numberArray_5[i + 2][j]) && (numberArray_5[i + 1][j] >= numberArray_5[i + 3][j])
                                    && (numberArray_5[i + 1][j] >= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 1][j])
                                }
                                else if ((numberArray_5[i + 2][j] >= numberArray_5[i][j]) && (numberArray_5[i + 2][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i + 2][j] >= numberArray_5[i + 3][j])
                                    && (numberArray_5[i + 2][j] >= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 2][j])
                                }
                                else if ((numberArray_5[i + 3][j] >= numberArray_5[i][j]) && (numberArray_5[i + 3][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i + 3][j] >= numberArray_5[i + 2][j])
                                    && (numberArray_5[i + 3][j] >= numberArray_5[i + 4][j])) {
                                    sample.push(numberArray_5[i + 3][j])
                                }
                                else if ((numberArray_5[i + 4][j] >= numberArray_5[i][j]) && (numberArray_5[i + 4][j] >= numberArray_5[i + 1][j]) && (numberArray_5[i + 4][j] >= numberArray_5[i + 2][j])
                                    && (numberArray_5[i + 4][j] >= numberArray_5[i + 3][j])) {
                                    sample.push(numberArray_5[i + 4][j])
                                }
                            }
                        }
                    }
                    if (i < Last_i_position) {
                        // console.log('i=',i)
                        sample.push(numberArray_5[i + 4][4])
                        Chart_Nifty_Fin_Service_15min.push(sample)
                        sample = []
                        i = i + 4;
                    }
                    else if (i == Last_i_position) {
                        if (Remainder == 1) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_5[i][4])
                            Chart_Nifty_Fin_Service_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 2) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_5[i + 1][4])
                            Chart_Nifty_Fin_Service_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 3) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_5[i + 2][4])
                            Chart_Nifty_Fin_Service_15min.push(sample)
                            i = dummy_i_new
                        }
                        else if (Remainder == 4) {
                            dummy_i_new = i;
                            i = Last_i_position
                            sample.push(numberArray_5[i + 3][4])
                            Chart_Nifty_Fin_Service_15min.push(sample)
                            i = dummy_i_new
                        }
                        console.log('15min Time Frame')
                        console.log(Chart_Nifty_Fin_Service_15min)
                        i = i + 5;
                    }
                }
                let Quotient_New = Math.trunc(Chart_Nifty_Fin_Service_15min.length / 2);
                let Remainder_New = Chart_Nifty_Fin_Service_15min.length % 2;
                let Last_i_position_New = Quotient_New * 2;
                console.log('Quotient_New = ', Quotient_New)
                for (var i = 0; i < Chart_Nifty_Fin_Service_15min.length; i++) {
                    sample_1.push(Chart_Nifty_Fin_Service_15min[i][0], Chart_Nifty_Fin_Service_15min[i][1])
                    for (var j = 2; j < 4; j++) {
                        console.log('i = ', i)
                        // console.log('j = ', j)
                        if (j == 3) {
                            if (i == Last_i_position_New) {
                                if (Remainder_New == 1) {
                                    dummy_i = i;
                                    i = Last_i_position_New
                                    // console.log('Remainder = ', Remainder)
                                    sample_1.push(Chart_Nifty_Fin_Service_15min[i][j])
                                    i = dummy_i;
                                }
                            }
                            else {
                                if ((Chart_Nifty_Fin_Service_15min[i][j] <= Chart_Nifty_Fin_Service_15min[i + 1][j])) {
                                    sample_1.push(Chart_Nifty_Fin_Service_15min[i][j])
                                }
                                else if ((Chart_Nifty_Fin_Service_15min[i + 1][j] <= Chart_Nifty_Fin_Service_15min[i][j])) {
                                    sample_1.push(Chart_Nifty_Fin_Service_15min[i + 1][j])
                                }
                            }
                        }
                        else if (j == 2) {
                            if (i == Last_i_position_New) {
                                if (Remainder_New == 1) {
                                    dummy_i = i;
                                    i = Last_i_position_New
                                    // console.log('Remainder = ', Remainder)
                                    sample_1.push(Chart_Nifty_Fin_Service_15min[i][j])
                                    i = dummy_i;
                                }
                            }
                            else {
                                if ((Chart_Nifty_Fin_Service_15min[i][j] >= Chart_Nifty_Fin_Service_15min[i + 1][j])) {
                                    sample_1.push(Chart_Nifty_Fin_Service_15min[i][j])
                                }
                                else if ((Chart_Nifty_Fin_Service_15min[i + 1][j] >= Chart_Nifty_Fin_Service_15min[i][j])) {
                                    sample_1.push(Chart_Nifty_Fin_Service_15min[i + 1][j])
                                }
                            }
                        }
                    }
                    if (i < Last_i_position_New) {
                        // console.log('i=',i)
                        sample_1.push(Chart_Nifty_Fin_Service_15min[i + 1][4])
                        Chart_Nifty_Fin_Service_30min.push(sample_1)
                        sample_1 = []
                        i = i + 1;
                    }
                    else if (i == Last_i_position_New) {
                        if (Remainder_New == 1) {
                            dummy_i_new = i;
                            i = Last_i_position_New
                            sample_1.push(Chart_Nifty_Fin_Service_15min[i][4])
                            Chart_Nifty_Fin_Service_30min.push(sample_1)
                            i = dummy_i_new
                        }
                        console.log('30min Time Frame')
                        console.log(Chart_Nifty_Fin_Service_30min)
                        // i = i + 2
                    }
                }

                Volume_2_exp_2_30min = []
                for (var i = 0; i < Array_5_exp_2.length; i++) {
                    Volume_2_exp_2_30min.push({
                        x: parseFloat(Array_5_exp_2[i][0]), // the date
                        y: parseFloat(Array_5_exp_2[i][1]), // the Volume
                        color: VolumeBarColor(parseFloat(Array_5_exp_2[i][1]))
                    })
                    i = i + 9
                }
            }
            highchart.update({
                title: {
                    text: 'Nifty Fin Service',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < Chart_Nifty_Fin_Service_30min.length; j++) {
                                        if (this.points[i].y == Chart_Nifty_Fin_Service_30min[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + Chart_Nifty_Fin_Service_30min[i][1] + '<br> High:' + Chart_Nifty_Fin_Service_30min[i][2] + '<br> Low:' + Chart_Nifty_Fin_Service_30min[i][3] + '<br> Close:' + Chart_Nifty_Fin_Service_30min[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        // pointWidth: 10,
                        data: Chart_Nifty_Fin_Service_30min,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        // pointWidth: 10,
                        data: Volume_2_exp_2_30min,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            })
        }
        if ($('#nifty_btn').hasClass('gb_active') && x == 0 && y == 1) {
            highchart.update({
                title: {
                    text: 'Nifty 50',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < ohlc.length; j++) {
                                        if (this.points[i].y == ohlc[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + ohlc[i][1] + '<br> High:' + ohlc[i][2] + '<br> Low:' + ohlc[i][3] + '<br> Close:' + ohlc[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: ohlc,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume_exp_2,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            })
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 0 && y == 1) {
            highchart.update({
                title: {
                    text: 'Nifty Bank',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < ohlc_1.length; j++) {
                                        if (this.points[i].y == ohlc_1[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + ohlc_1[i][1] + '<br> High:' + ohlc_1[i][2] + '<br> Low:' + ohlc_1[i][3] + '<br> Close:' + ohlc_1[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: ohlc_1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume_1_exp_2,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            })
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 0 && y == 1) {
            highchart.update({
                title: {
                    text: 'Nifty Fin Service',
                    align: 'left',
                    style: {
                        "color": "White",
                        "fontSize": "20px",
                        "fontWeight": "bold",
                        "fontFamily": "Outfit"
                    }
                },
                tooltip: {
                    split: true,
                    formatter: function () {
                        tooltipArray = ['<b>' + moment.unix(this.x).format('h:mm a') + '</b>']
                        for (var i = 0; i < this.points.length; i++) {
                            if (i == 0) {
                                if (i == 0) {
                                    console.log(this.points[i].y)
                                    for (var j = 0; j < ohlc_2.length; j++) {
                                        if (this.points[i].y == ohlc_2[j][4]) {
                                            i = j
                                            tooltipArray.push('Open:' + ohlc_2[i][1] + '<br> High:' + ohlc_2[i][2] + '<br> Low:' + ohlc_2[i][3] + '<br> Close:' + ohlc_2[i][4])
                                            break;
                                        }
                                    }
                                    i = 0
                                }
                            }
                            else if (i == 1) {
                                tooltipArray.push('Volume:' + this.points[i].y)
                            }
                        }
                        return tooltipArray;
                    }
                },
                series: [
                    {
                        type: 'candlestick',
                        name: 'AAPL',
                        data: ohlc_2,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    },
                    {
                        type: 'column',
                        name: 'Volume',
                        data: Volume_2_exp_2,
                        yAxis: 1,
                        dataGrouping: {
                            enabled: false,
                            // units: groupingUnits
                        }
                    }
                ]
            })
        }
    });
});