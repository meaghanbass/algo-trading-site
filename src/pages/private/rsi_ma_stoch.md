---
title: "RSI+MA+STOCH"
date: "2017-08-10"
tags: ["private","script"]
authRequired: true
---

<pre>
//@version=2
study("RSI+MA", overlay=true)  
 
// data series for RSI with length 14
rsi = rsi(close, 14)
// data series for Moving Average with length 9
ma = sma(close, 9)
// data series for Stochastic
stoch = stoch(close, high, low, 14)  
 
// data series for buy signals:
//price should be below the moving average and RSI should be smaller than 40
buy_signals = close < ma and rsi < 30 and stoch < 20  
 
// data series for sell signals:
//price should be above the moving average and RSI should be above 60
sell_signals = close > ma and rsi > 70 and stoch > 80  
 
// draw some shapes on the chart if conditions are met
plotshape(buy_signals, style=shape.triangleup, text="buy", color=yellow)
plotshape(sell_signals, style=shape.triangledown, text="sell")  
 
// create alert conditions so that alerts can be create via the add alerts dialog
alertcondition(buy_signals, title='Buy-Signal', message='price is below the MA and RSI is below 40')
alertcondition(sell_signals, title='Sell-Signal', message='price is above the MA and RSI is above 70')
</pre>