// Expiry API
function call_Expiry_API(script) {
    $.post("https://students.tradingcafeindia.com/tc_indicator/get_running_expiry", { 'script': script }, function (data, status) {
        Expiry_data = data
    });

    var x = moment.unix(Expiry_data[0][0]).format('MMM-D')
    var y = moment.unix(Expiry_data[1][0]).format('MMM-D')
    $('#1st_dropdown_value').attr('value', x)
    $('#2nd_dropdown_value').attr('value', y)
    $('#1st_dropdown_value').text(x + ' ' + Expiry_data[0][1])
    $('#2nd_dropdown_value').text(y + ' ' + Expiry_data[1][1])
    Nifty_exp_1 = moment.unix(Expiry_data[0][0]).format('DDMMM')
    Nifty_exp_2 = moment.unix(Expiry_data[1][0]).format('DDMMM')

    return [Expiry_data, Nifty_exp_1, Nifty_exp_2]
}

// Candlestick API
function call_Candlestick_API(script) {
    $.post("https://students.tradingcafeindia.com/tc_indicator/chart", { 'script': script }, function (data, status) {
        Candle_data = data
        if (Candle_data.length == 0) {
            Candle_data = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
        }
    });
    return Candle_data
}

// Volume API 
function call_Volume_API(script, exp_date) {
    $.post("https://students.tradingcafeindia.com/tc_indicator/op_histogram", { 'script': script, 'exp': exp_date }, function (data, status) {
        Volume_data = data
    });
    return Volume_data
}

// Bottom Right Bar API 
function call_Bottom_Right_Bar_API(script, exp_date, exp_type) {
    $.post("https://students.tradingcafeindia.com/tc_indicator/op_bargraph", { 'script': script, 'exp': exp_date, 'exp_type': exp_type }, function (data, status) {
        Bottom_Right_Bar_data = data
    });
    return Bottom_Right_Bar_data
}

// Dial API 
function call_Dial_API(script, exp_date, exp_type) {
    $.post("https://students.tradingcafeindia.com/tc_indicator/op_dial", { 'script': script, 'exp': exp_date, 'exp_type': exp_type }, function (data, status) {
        Dial_data = data
    });
    if (Dial_data.length == 0) { return }
    if (parseFloat(Dial_data[0][2]) > 0) {
        $('#PCM_Color').removeClass()
        $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
        $('#PCM_Arrow').removeClass()
        $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
    }
    else if (parseFloat(Dial_data[0][2]) < 0) {
        $('#PCM_Color').removeClass()
        $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
        $('#PCM_Arrow').removeClass()
        $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
    }
    else if (parseFloat(Dial_data[0][2]) == 0) {
        $('#PCM_Color').removeClass()
        $('#PCM_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
        $('#PCM_Arrow').removeClass()
        $('#PCM_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
    }
    return Dial_data
}

// Calculation Function 
function calculation_for_Exp_1(vol_data, Bar_data) {
    // Data for Volume (For 1st dropdown value)
    if (vol_data.length != 0) {
        Array_1 = [];
        Array_2 = [];
        len_1 = vol_data.length;
        for (var i = 0; i < len_1; i++) {
            for (var j = 0; j < vol_data[0].length; j++) {
                Array_2.push(parseFloat(vol_data[i][j]));
                j = j + 1
            }
            Array_1.push(Array_2);
            Array_2 = []
        }
        console.log(Array_1);
    }
    else if (vol_data.length == 0) {
        Array_1 = [[0, 0], [0, 0]]
    }

    // For Sentiment Dial (Calculation Part)
    if (Array_1.length != 0) {
        Nifty_exp_1_A = 0
        Nifty_exp_1_B = 0
        Nifty_exp_1_Dial = 0
        for (var i = 0; i < Array_1.length; i++) {
            if (Array_1[i][1] > 0) {
                Nifty_exp_1_A = Nifty_exp_1_A + Array_1[i][1]
            }
            else if (Array_1[i][1] < 0) {
                Nifty_exp_1_B = Nifty_exp_1_B + Array_1[i][1]
            }
        }
        console.log('Nifty_exp_1_A = ', Nifty_exp_1_A)
        console.log('Nifty_exp_1_B = ', Math.abs(Nifty_exp_1_B))
        if (Nifty_exp_1_A > Math.abs(Nifty_exp_1_B)) {
            Nifty_exp_1_Dial = (Nifty_exp_1_A) / (Math.abs(Nifty_exp_1_B))
            console.log("Nifty_exp_1_Dial = ", Nifty_exp_1_Dial)
        }
        else if (Nifty_exp_1_A < Math.abs(Nifty_exp_1_B)) {
            Nifty_exp_1_Dial = - (Math.abs(Nifty_exp_1_B)) / (Nifty_exp_1_A)
            console.log("Nifty_exp_1_Dial = ", Nifty_exp_1_Dial)
        }

        if (Nifty_exp_1_Dial > 0) {
            $('#sentiment_dial_Color').removeClass()
            $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleBuy-G5piCoZi')
            $('#sentiment_dial_Arrow').removeClass()
            $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowBuy-G5piCoZi arrowShudderBuy-G5piCoZi')
        }
        else if (Nifty_exp_1_Dial < 0) {
            $('#sentiment_dial_Color').removeClass()
            $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleSell-G5piCoZi')
            $('#sentiment_dial_Arrow').removeClass()
            $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowSell-G5piCoZi arrowShudderSell-G5piCoZi')
        }
        else if (Nifty_exp_1_Dial == 0) {
            $('#sentiment_dial_Color').removeClass()
            $('#sentiment_dial_Color').addClass('semicircle-G5piCoZi semicircleNeutral-G5piCoZi')
            $('#sentiment_dial_Arrow').removeClass()
            $('#sentiment_dial_Arrow').addClass('arrow-G5piCoZi arrowNeutral-G5piCoZi arrowShudderNeutral-G5piCoZi')
        }
    }

    // Data for Nifty Bottom Right Bar (For 1st dropdown value)
    if (Bar_data.length != 0) {
        Bottom_Right_Array_1 = [];
        Bottom_Right_len_1 = Bar_data[0].length;
        for (var i = 0; i < Bottom_Right_len_1; i++) {
            if (i == 1) { i = i + 1 }
            Bottom_Right_Array_1.push(parseFloat(Bar_data[0][i]));
        }
        console.log("Bottom_Right_Array_1 = ", Bottom_Right_Array_1);
    }
    else if (Bar_data.length == 0) {
        Bottom_Right_Array_1 = [0, 0, 0]
    }

    return [Array_1, Bottom_Right_Array_1]
}

// Highchart color function
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
function ohlc_and_Volume(candlestick_data) {
    if (counter_for_Nifty_3min == 0) {
        counter_for_Nifty_3min += 1
        ohlc = []
        Volume = []
        dataLength = candlestick_data.length
        console.log(dataLength)

        let First_candle_time = parseFloat(moment.unix(parseFloat(candlestick_data[0][0])).format('h.mm'))
        console.log("First_candle_time = " + First_candle_time)
        let First_Histo_time = parseFloat(moment.unix(Array_1[0][0]).format('h.mm'))
        console.log("First_Histo_time = " + First_Histo_time)


        if (First_candle_time < First_Histo_time) {
            console.log('start from First_candle_time')
            console.log('Add to Histogram')
            console.log((First_Histo_time - First_candle_time))
            var start = moment.unix(parseFloat(candlestick_data[0][0])).format('h:mm')
            var end = moment.unix(Array_1[0][0]).format('h:mm')

            var mins = moment.utc(moment(end, "h:mm:").diff(moment(start, "h:mm"))).format("mm")
            console.log("mins = ", mins)

            How_many_times_addition = Math.round(parseFloat(mins) / 3) - 1
            console.log('How_many_times_addition = ' + How_many_times_addition)
            Dummy = []
            Dummy_1 = []
            for (var i = 0; i < How_many_times_addition; i++) {
                console.log("i = ", i)
                Dummy.push(parseFloat(candlestick_data[i + 1][0]), 0)
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
            var end = moment.unix(parseFloat(candlestick_data[0][0])).format('h:mm')
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

        let Last_candle_time = parseFloat(moment.unix(parseFloat(candlestick_data[candlestick_data.length - 1][0])).format('h.mm'))
        console.log("Last_candle_time = " + Last_candle_time)
        let Last_Histo_time = parseFloat(moment.unix(Array_1[Array_1.length - 1][0]).format('h.mm'))
        console.log("Last_Histo_time = " + Last_Histo_time)

        if (Last_candle_time >= Last_Histo_time) {
            console.log(Last_candle_time, Last_Histo_time)
            console.log('Add to Histogram')
            console.log(Last_Histo_time + Last_candle_time)

            var end = moment.unix(parseFloat(candlestick_data[candlestick_data.length - 1][0])).format('h:mm')
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

            var start = moment.unix(parseFloat(candlestick_data[candlestick_data.length - 1][0])).format('h:mm')
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

        for (var i = 0; i < dataLength; i += 1) {
            console.log(i)
            ohlc.push([
                parseFloat(Array_1[i][0]), // the date
                parseFloat(candlestick_data[i][1]), // open
                parseFloat(candlestick_data[i][2]), // high
                parseFloat(candlestick_data[i][3]), // low
                parseFloat(candlestick_data[i][4]) // close
            ]);
        }
        for (var i = 0; i < Array_1.length; i++) {
            Volume.push({
                x: parseFloat(Array_1[i][0]), // the date
                y: parseFloat(Array_1[i][1]), // the Volume
                color: VolumeBarColor(parseFloat(Array_1[i][1]))
            });
        }
    }
}

// Chart Update function
function update_all_chart(title, ohlc, Volume) {
    highchart.update({
        title: {
            text: title,
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
                }
            },
            {
                type: 'column',
                name: 'Volume',
                data: Volume,
                yAxis: 1,
                dataGrouping: {
                    enabled: false,
                }
            }
        ]
    }),
        chart_2.updateSeries([{
            data: [Bottom_Right_Array_1[1], Bottom_Right_Array_1[2]],
        }])
}

// function for 15min data
function ohlc_and_Volume_15min(candlestick_data) {
    if (counter_for_Nifty_15min == 0) {
        counter_for_Nifty_15min += 1
        candlestick_data_15min = []       // for Candlestick
        sample = []
        numberArray_1 = ohlc
        let Quotient = Math.trunc(candlestick_data.length / 5);
        let Remainder = candlestick_data.length % 5;
        let Last_i_position = Quotient * 5;
        for (var i = 0; i < candlestick_data.length; i++) {
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
                candlestick_data_15min.push(sample)
                sample = []
                i = i + 4;
            }
            else if (i == Last_i_position) {
                if (Remainder == 1) {
                    dummy_i_new = i;
                    i = Last_i_position
                    sample.push(numberArray_1[i][4])
                    candlestick_data_15min.push(sample)
                    i = dummy_i_new
                }
                else if (Remainder == 2) {
                    dummy_i_new = i;
                    i = Last_i_position
                    sample.push(numberArray_1[i + 1][4])
                    candlestick_data_15min.push(sample)
                    i = dummy_i_new
                }
                else if (Remainder == 3) {
                    dummy_i_new = i;
                    i = Last_i_position
                    sample.push(numberArray_1[i + 2][4])
                    candlestick_data_15min.push(sample)
                    i = dummy_i_new
                }
                else if (Remainder == 4) {
                    dummy_i_new = i;
                    i = Last_i_position
                    sample.push(numberArray_1[i + 3][4])
                    candlestick_data_15min.push(sample)
                    i = dummy_i_new
                }
                console.log('15min Time Frame')
                console.log(candlestick_data_15min)
                i = i + 5;
                ohlc = candlestick_data_15min
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
        Volume = Volume_15min
    }
}

// function for 30min data
function ohlc_and_Volume_30min() {
    $.ajaxSetup({ async: false });  // to stop async 
    if (counter_for_Nifty_30min == 0) {
        counter_for_Nifty_30min += 1
        ohlc_and_Volume_15min(Candle_data)
        console.log("ohlc = ", ohlc)
        candlestick_data_30min = []       // for Candlestick
        sample_1 = []
        let Quotient_New = Math.trunc(ohlc.length / 2);
        let Remainder_New = ohlc.length % 2;
        let Last_i_position_New = Quotient_New * 2;
        console.log('Quotient_New = ', Quotient_New)
        console.log('ohlc = ', ohlc)
        for (var i = 0; i < ohlc.length; i++) {
            sample_1.push(ohlc[i][0], ohlc[i][1])
            for (var j = 2; j < 4; j++) {
                console.log('i = ', i)
                // console.log('j = ', j)
                if (j == 3) {
                    if (i == Last_i_position_New) {
                        if (Remainder_New == 1) {
                            dummy_i = i;
                            i = Last_i_position_New
                            // console.log('Remainder = ', Remainder)
                            sample_1.push(ohlc[i][j])
                            i = dummy_i;
                        }
                    }
                    else {
                        if ((ohlc[i][j] <= ohlc[i + 1][j])) {
                            sample_1.push(ohlc[i][j])
                        }
                        else if ((ohlc[i + 1][j] <= ohlc[i][j])) {
                            sample_1.push(ohlc[i + 1][j])
                        }
                    }
                }
                else if (j == 2) {
                    if (i == Last_i_position_New) {
                        if (Remainder_New == 1) {
                            dummy_i = i;
                            i = Last_i_position_New
                            // console.log('Remainder = ', Remainder)
                            sample_1.push(ohlc[i][j])
                            i = dummy_i;
                        }
                    }
                    else {
                        if ((ohlc[i][j] >= ohlc[i + 1][j])) {
                            sample_1.push(ohlc[i][j])
                        }
                        else if ((ohlc[i + 1][j] >= ohlc[i][j])) {
                            sample_1.push(ohlc[i + 1][j])
                        }
                    }
                }
            }
            if (i < Last_i_position_New) {
                // console.log('i=',i)
                sample_1.push(ohlc[i + 1][4])
                candlestick_data_30min.push(sample_1)
                sample_1 = []
                i = i + 1;
                console.log(candlestick_data_30min)
            }
            else if (i == Last_i_position_New) {
                if (Remainder_New == 1) {
                    dummy_i_new = i;
                    i = Last_i_position_New
                    sample_1.push(ohlc[i][4])
                    candlestick_data_30min.push(sample_1)
                    i = dummy_i_new
                }
                console.log('30min Time Frame')
                console.log(candlestick_data_30min)
                // i = i + 2
                ohlc = candlestick_data_30min
            }
        }

        Volume_2_exp_2_30min = []
        for (var i = 0; i < Array_1.length; i++) {
            Volume_2_exp_2_30min.push({
                x: parseFloat(Array_1[i][0]), // the date
                y: parseFloat(Array_1[i][1]), // the Volume
                color: VolumeBarColor(parseFloat(Array_1[i][1]))
            })
            i = i + 9
        }
        Volume = Volume_2_exp_2_30min
    }
}


$(document).ready(function () {

    $.ajaxSetup({ async: false });  // to stop async 

    compare = 0;
    counter_for_Nifty_3min = 0;
    counter_for_Nifty_15min = 0;
    counter_for_Nifty_30min = 0;
    console.log("ready!");

    call_Expiry_API('NIFTY 50');
    call_Candlestick_API('NIFTY 50');
    call_Volume_API('NIFTY 50', Nifty_exp_1);
    call_Bottom_Right_Bar_API('NIFTY 50', Nifty_exp_1, Expiry_data[0][1]);
    call_Dial_API('NIFTY 50', Nifty_exp_1, Expiry_data[0][1]);
    calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
    ohlc_and_Volume(Candle_data);

    // create the chart
    highchart = Highcharts.stockChart('chart', {

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
                }
            },
            {
                type: 'column',
                name: 'Volume',
                data: Volume,
                yAxis: 1,
                dataGrouping: {
                    enabled: false,
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

    chart_2 = new ApexCharts(document.querySelector("#chart_2"), options);
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

    // On click Function of 3 BUTTONS [NIFTY 50, NIFTY BANK, NIFTY FIN SERVICE]
    $('#nifty_btn').click(function () {
        compare = 0;
        counter_for_Nifty_3min = 0
        $('#nifty_btn').addClass('gb_active')
        $('#bnknifty_btn').removeClass('gb_active')
        $('#finnifty_btn').removeClass('gb_active')
        $("#Expiry").prop("selectedIndex", 0);
        $("#Time_Frame").prop("selectedIndex", 0);
        call_Expiry_API('NIFTY 50');
        call_Candlestick_API('NIFTY 50');
        call_Volume_API('NIFTY 50', Nifty_exp_1);
        call_Bottom_Right_Bar_API('NIFTY 50', Nifty_exp_1, Expiry_data[0][1]);
        call_Dial_API('NIFTY 50', Nifty_exp_1, Expiry_data[0][1]);
        calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
        ohlc_and_Volume(Candle_data);
        update_all_chart('Nifty 50', ohlc, Volume);
    })
    $('#bnknifty_btn').click(function () {
        compare = 0;
        counter_for_Nifty_3min = 0
        $('#nifty_btn').removeClass('gb_active')
        $('#bnknifty_btn').addClass('gb_active')
        $('#finnifty_btn').removeClass('gb_active')
        $("#Expiry").prop("selectedIndex", 0);
        $("#Time_Frame").prop("selectedIndex", 0);
        call_Expiry_API('NIFTY BANK');
        call_Candlestick_API('NIFTY BANK');
        call_Volume_API('NIFTY BANK', Nifty_exp_1);
        call_Bottom_Right_Bar_API('NIFTY BANK', Nifty_exp_1, Expiry_data[0][1]);
        call_Dial_API('NIFTY BANK', Nifty_exp_1, Expiry_data[0][1]);
        calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
        ohlc_and_Volume(Candle_data);
        update_all_chart('Nifty Bank', ohlc, Volume);
    })
    $('#finnifty_btn').click(function () {
        compare = 0;
        counter_for_Nifty_3min = 0
        $('#nifty_btn').removeClass('gb_active')
        $('#bnknifty_btn').removeClass('gb_active')
        $('#finnifty_btn').addClass('gb_active')
        $("#Expiry").prop("selectedIndex", 0);
        $("#Time_Frame").prop("selectedIndex", 0);
        call_Expiry_API('NIFTY FIN SERVICE');
        call_Candlestick_API('NIFTY FIN SERVICE');
        call_Volume_API('NIFTY FIN SERVICE', Nifty_exp_1);
        call_Bottom_Right_Bar_API('NIFTY FIN SERVICE', Nifty_exp_1, Expiry_data[0][1]);
        call_Dial_API('NIFTY FIN SERVICE', Nifty_exp_1, Expiry_data[0][1]);
        calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
        ohlc_and_Volume(Candle_data);
        update_all_chart('Nifty Fin Service', ohlc, Volume);
    })

    //Expiry Change
    $("#Expiry").change(function () {
        var x = $("#Expiry").prop('selectedIndex');
        var y = $("#Time_Frame").prop('selectedIndex');
        console.log(x, y)
        if ($('#nifty_btn').hasClass('gb_active') && x == 1 && y == 0) {
            compare = 0;
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY 50', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY 50', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY 50', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            update_all_chart('Nifty 50', ohlc, Volume);
        }
        else if ($('#nifty_btn').hasClass('gb_active') && x == 0 && y == 0) {
            compare = 0;
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY 50', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY 50', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY 50', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            update_all_chart('Nifty 50', ohlc, Volume);
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 1 && y == 0) {
            compare = 0;
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY BANK', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY BANK', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY BANK', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            update_all_chart('Nifty Bank', ohlc, Volume);
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 0 && y == 0) {
            compare = 0;
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY BANK', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY BANK', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY BANK', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            update_all_chart('Nifty Bank', ohlc, Volume);
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 1 && y == 0) {
            compare = 0;
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY FIN SERVICE', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY FIN SERVICE', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY FIN SERVICE', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            update_all_chart('Nifty Fin Service', ohlc, Volume);
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 0 && y == 0) {
            compare = 0;
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY FIN SERVICE', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY FIN SERVICE', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY FIN SERVICE', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            update_all_chart('Nifty Fin Service', ohlc, Volume);
        }
        else if ($('#nifty_btn').hasClass('gb_active') && x == 1 && y == 1) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY 50', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY 50', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY 50', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_15min(Candle_data);
            update_all_chart('Nifty 50', ohlc, Volume);
        }
        else if ($('#nifty_btn').hasClass('gb_active') && x == 0 && y == 1) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY 50', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY 50', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY 50', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_15min(Candle_data);
            update_all_chart('Nifty 50', ohlc, Volume);
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 1 && y == 1) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY BANK', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY BANK', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY BANK', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_15min(Candle_data);
            update_all_chart('Nifty Bank', ohlc, Volume);
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 0 && y == 1) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY BANK', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY BANK', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY BANK', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_15min(Candle_data);
            update_all_chart('Nifty Bank', ohlc, Volume);
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 1 && y == 1) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY FIN SERVICE', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY FIN SERVICE', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY FIN SERVICE', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_15min(Candle_data);
            update_all_chart('Nifty Fin Service', ohlc, Volume);
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 0 && y == 1) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY FIN SERVICE', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY FIN SERVICE', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY FIN SERVICE', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_15min(Candle_data);
            update_all_chart('Nifty Fin Service', ohlc, Volume);
        }
        else if ($('#nifty_btn').hasClass('gb_active') && x == 1 && y == 2) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0
            counter_for_Nifty_30min = 0

            call_Volume_API('NIFTY 50', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY 50', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY 50', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_30min();
            update_all_chart('Nifty 50', ohlc, Volume);
        }
        else if ($('#nifty_btn').hasClass('gb_active') && x == 0 && y == 2) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0
            counter_for_Nifty_30min = 0

            call_Volume_API('NIFTY 50', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY 50', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY 50', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_30min();
            update_all_chart('Nifty 50', ohlc, Volume);
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 1 && y == 2) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0
            counter_for_Nifty_30min = 0

            call_Volume_API('NIFTY BANK', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY BANK', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY BANK', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_30min();
            update_all_chart('Nifty Bank', ohlc, Volume);
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 0 && y == 2) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0
            counter_for_Nifty_30min = 0

            call_Volume_API('NIFTY BANK', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY BANK', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY BANK', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_30min();
            update_all_chart('Nifty Bank', ohlc, Volume);
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 1 && y == 2) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0
            counter_for_Nifty_30min = 0

            call_Volume_API('NIFTY FIN SERVICE', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY FIN SERVICE', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY FIN SERVICE', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_30min();
            update_all_chart('Nifty Fin Service', ohlc, Volume);
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 0 && y == 2) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0
            counter_for_Nifty_30min = 0

            call_Volume_API('NIFTY FIN SERVICE', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY FIN SERVICE', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY FIN SERVICE', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_30min();
            update_all_chart('Nifty Fin Service', ohlc, Volume);
        }
    })

    $("#Time_Frame").change(function () {
        var x = $("#Expiry").prop('selectedIndex');
        var y = $("#Time_Frame").prop('selectedIndex');
        console.log(x, y)
        if ($('#nifty_btn').hasClass('gb_active') && x == 1 && y == 0) {

            compare = 0;
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY 50', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY 50', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY 50', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            update_all_chart('Nifty 50', ohlc, Volume);
        }
        else if ($('#nifty_btn').hasClass('gb_active') && x == 0 && y == 0) {
            compare = 0;
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY 50', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY 50', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY 50', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            update_all_chart('Nifty 50', ohlc, Volume);
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 1 && y == 0) {
            compare = 0;
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY BANK', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY BANK', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY BANK', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            update_all_chart('Nifty Bank', ohlc, Volume);
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 0 && y == 0) {
            compare = 0;
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY BANK', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY BANK', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY BANK', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            update_all_chart('Nifty Bank', ohlc, Volume);
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 1 && y == 0) {
            compare = 0;
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY FIN SERVICE', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY FIN SERVICE', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY FIN SERVICE', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            update_all_chart('Nifty Fin Service', ohlc, Volume);
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 0 && y == 0) {
            compare = 0;
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY FIN SERVICE', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY FIN SERVICE', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY FIN SERVICE', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            update_all_chart('Nifty Fin Service', ohlc, Volume);
        }
        else if ($('#nifty_btn').hasClass('gb_active') && x == 1 && y == 1) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY 50', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY 50', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY 50', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_15min(Candle_data);
            update_all_chart('Nifty 50', ohlc, Volume);
        }
        else if ($('#nifty_btn').hasClass('gb_active') && x == 0 && y == 1) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY 50', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY 50', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY 50', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_15min(Candle_data);
            update_all_chart('Nifty 50', ohlc, Volume);
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 1 && y == 1) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY BANK', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY BANK', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY BANK', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_15min(Candle_data);
            update_all_chart('Nifty Bank', ohlc, Volume);
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 0 && y == 1) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY BANK', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY BANK', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY BANK', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_15min(Candle_data);
            update_all_chart('Nifty Bank', ohlc, Volume);
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 1 && y == 1) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY FIN SERVICE', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY FIN SERVICE', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY FIN SERVICE', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_15min(Candle_data);
            update_all_chart('Nifty Fin Service', ohlc, Volume);
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 0 && y == 1) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0

            call_Volume_API('NIFTY FIN SERVICE', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY FIN SERVICE', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY FIN SERVICE', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_15min(Candle_data);
            update_all_chart('Nifty Fin Service', ohlc, Volume);
        }
        else if ($('#nifty_btn').hasClass('gb_active') && x == 1 && y == 2) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0
            counter_for_Nifty_30min = 0

            call_Volume_API('NIFTY 50', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY 50', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY 50', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_30min();
            update_all_chart('Nifty 50', ohlc, Volume);
        }
        else if ($('#nifty_btn').hasClass('gb_active') && x == 0 && y == 2) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0
            counter_for_Nifty_30min = 0

            call_Volume_API('NIFTY 50', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY 50', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY 50', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_30min();
            update_all_chart('Nifty 50', ohlc, Volume);
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 1 && y == 2) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0
            counter_for_Nifty_30min = 0

            call_Volume_API('NIFTY BANK', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY BANK', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY BANK', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_30min();
            update_all_chart('Nifty Bank', ohlc, Volume);
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 0 && y == 2) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0
            counter_for_Nifty_30min = 0

            call_Volume_API('NIFTY BANK', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY BANK', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY BANK', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_30min();
            update_all_chart('Nifty Bank', ohlc, Volume);
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 1 && y == 2) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0
            counter_for_Nifty_30min = 0

            call_Volume_API('NIFTY FIN SERVICE', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY FIN SERVICE', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY FIN SERVICE', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_30min();
            update_all_chart('Nifty Fin Service', ohlc, Volume);
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 0 && y == 2) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0
            counter_for_Nifty_30min = 0

            call_Volume_API('NIFTY FIN SERVICE', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY FIN SERVICE', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY FIN SERVICE', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_30min();
            update_all_chart('Nifty Fin Service', ohlc, Volume);
        }
    })

    setInterval(function () {
        var x = $("#Expiry").prop('selectedIndex');
        var y = $("#Time_Frame").prop('selectedIndex');
        if ($('#nifty_btn').hasClass('gb_active') && x == 1 && y == 0) {
            compare = 0;
            counter_for_Nifty_3min = 0
            
        call_Candlestick_API('NIFTY 50');
            call_Volume_API('NIFTY 50', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY 50', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY 50', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            update_all_chart('Nifty 50', ohlc, Volume);
        }
        else if ($('#nifty_btn').hasClass('gb_active') && x == 0 && y == 0) {
            compare = 0;
            counter_for_Nifty_3min = 0

            call_Candlestick_API('NIFTY 50');
            call_Volume_API('NIFTY 50', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY 50', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY 50', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            update_all_chart('Nifty 50', ohlc, Volume);
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 1 && y == 0) {
            compare = 0;
            counter_for_Nifty_3min = 0

            call_Candlestick_API('NIFTY BANK');
            call_Volume_API('NIFTY BANK', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY BANK', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY BANK', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            update_all_chart('Nifty Bank', ohlc, Volume);
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 0 && y == 0) {
            compare = 0;
            counter_for_Nifty_3min = 0

            call_Candlestick_API('NIFTY BANK');
            call_Volume_API('NIFTY BANK', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY BANK', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY BANK', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            update_all_chart('Nifty Bank', ohlc, Volume);
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 1 && y == 0) {
            compare = 0;
            counter_for_Nifty_3min = 0

            call_Candlestick_API('NIFTY FIN SERVICE');
            call_Volume_API('NIFTY FIN SERVICE', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY FIN SERVICE', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY FIN SERVICE', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            update_all_chart('Nifty Fin Service', ohlc, Volume);
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 0 && y == 0) {
            compare = 0;
            counter_for_Nifty_3min = 0

            call_Candlestick_API('NIFTY FIN SERVICE');
            call_Volume_API('NIFTY FIN SERVICE', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY FIN SERVICE', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY FIN SERVICE', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            update_all_chart('Nifty Fin Service', ohlc, Volume);
        }
        else if ($('#nifty_btn').hasClass('gb_active') && x == 1 && y == 1) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0

            call_Candlestick_API('NIFTY 50');
            call_Volume_API('NIFTY 50', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY 50', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY 50', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_15min(Candle_data);
            update_all_chart('Nifty 50', ohlc, Volume);
        }
        else if ($('#nifty_btn').hasClass('gb_active') && x == 0 && y == 1) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0

            call_Candlestick_API('NIFTY 50');
            call_Volume_API('NIFTY 50', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY 50', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY 50', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_15min(Candle_data);
            update_all_chart('Nifty 50', ohlc, Volume);
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 1 && y == 1) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0

            call_Candlestick_API('NIFTY BANK');
            call_Volume_API('NIFTY BANK', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY BANK', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY BANK', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_15min(Candle_data);
            update_all_chart('Nifty Bank', ohlc, Volume);
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 0 && y == 1) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0

            call_Candlestick_API('NIFTY BANK');
            call_Volume_API('NIFTY BANK', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY BANK', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY BANK', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_15min(Candle_data);
            update_all_chart('Nifty Bank', ohlc, Volume);
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 1 && y == 1) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0

            call_Candlestick_API('NIFTY FIN SERVICE');
            call_Volume_API('NIFTY FIN SERVICE', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY FIN SERVICE', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY FIN SERVICE', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_15min(Candle_data);
            update_all_chart('Nifty Fin Service', ohlc, Volume);
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 0 && y == 1) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0

            call_Candlestick_API('NIFTY FIN SERVICE');
            call_Volume_API('NIFTY FIN SERVICE', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY FIN SERVICE', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY FIN SERVICE', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_15min(Candle_data);
            update_all_chart('Nifty Fin Service', ohlc, Volume);
        }
        else if ($('#nifty_btn').hasClass('gb_active') && x == 1 && y == 2) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0
            counter_for_Nifty_30min = 0

            call_Candlestick_API('NIFTY 50');
            call_Volume_API('NIFTY 50', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY 50', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY 50', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_30min();
            update_all_chart('Nifty 50', ohlc, Volume);
        }
        else if ($('#nifty_btn').hasClass('gb_active') && x == 0 && y == 2) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0
            counter_for_Nifty_30min = 0

            call_Candlestick_API('NIFTY 50');
            call_Volume_API('NIFTY 50', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY 50', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY 50', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_30min();
            update_all_chart('Nifty 50', ohlc, Volume);
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 1 && y == 2) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0
            counter_for_Nifty_30min = 0

            call_Candlestick_API('NIFTY BANK');
            call_Volume_API('NIFTY BANK', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY BANK', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY BANK', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_30min();
            update_all_chart('Nifty Bank', ohlc, Volume);
        }
        else if ($('#bnknifty_btn').hasClass('gb_active') && x == 0 && y == 2) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0
            counter_for_Nifty_30min = 0

            call_Candlestick_API('NIFTY BANK');
            call_Volume_API('NIFTY BANK', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY BANK', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY BANK', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_30min();
            update_all_chart('Nifty Bank', ohlc, Volume);
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 1 && y == 2) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0
            counter_for_Nifty_30min = 0

            call_Candlestick_API('NIFTY FIN SERVICE');
            call_Volume_API('NIFTY FIN SERVICE', Nifty_exp_2);
            call_Bottom_Right_Bar_API('NIFTY FIN SERVICE', Nifty_exp_2, Expiry_data[1][1]);
            call_Dial_API('NIFTY FIN SERVICE', Nifty_exp_2, Expiry_data[1][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_30min();
            update_all_chart('Nifty Fin Service', ohlc, Volume);
        }
        else if ($('#finnifty_btn').hasClass('gb_active') && x == 0 && y == 2) {
            compare = 0;
            counter_for_Nifty_15min = 0
            counter_for_Nifty_3min = 0
            counter_for_Nifty_30min = 0

            call_Candlestick_API('NIFTY FIN SERVICE');
            call_Volume_API('NIFTY FIN SERVICE', Nifty_exp_1);
            call_Bottom_Right_Bar_API('NIFTY FIN SERVICE', Nifty_exp_1, Expiry_data[0][1]);
            call_Dial_API('NIFTY FIN SERVICE', Nifty_exp_1, Expiry_data[0][1]);
            calculation_for_Exp_1(Volume_data, Bottom_Right_Bar_data);
            ohlc_and_Volume(Candle_data);
            ohlc_and_Volume_30min();
            update_all_chart('Nifty Fin Service', ohlc, Volume);
        }
    }, 180000)
})
