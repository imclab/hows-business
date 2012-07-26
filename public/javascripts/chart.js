$(function () {
  var chartTrend;
  var chartRaw;
  var chartSeason;
  $(document).ready(function() {
  
    source = 'Source: City of Chicago';
    startDate = Date.UTC(2005, 0, 28); //start with a buffer of days - month counting is an inexact science
  
    //trendline 
    var trendData = [925.87,934.2,942.87,951.83,962.26,971.41,973.31,962.89,938.15,908.63,882.26,867,867.25,877.69,892.67,903.1,898.88,891.82,887.82,889.04,912.05,939.25,965.54,988.44,955.04,905.64,869.84,826.66,788.85,784.73,786.61,794.83,819.96,854.63,887.01,915,930.63,928.1,910.7,890.14,868.53,844.33,824.96,806.56,780.27,754.26,732.28,711.82,697.44,694.79,703.38,719.42,745.04,766.8,771.47,774.57,777.5,774.72,765.08,753.41,741.07,725.17,709.31,699,686.48,676.76,673.78,674.42,678.14,691.31,708.69,724.47,744.93,761.5,761.7,767.09,772.42,771.68,774.11,774.24,767.09,753.18,738.69,724.93,708.81,695.03,684.13,670.79,657.74,645.09];
    
    chartTrend = ChartHelper.create('businessLicenseTrend', 'Seasonally Adjusted Trend of New Business Licenses', source, 'Issued business licenses', '#518fc9', trendData, startDate, 'month');
    
    //raw license count
    var rawData = [865,1115,1195,1075,1084,1186,963,1012,748,856,809,604,752,991,1143,983,1069,1276,869,904,704,924,1022,727,864,742,892,843,983,907,742,858,671,822,858,722,811,926,1106,970,934,1015,912,819,732,751,633,584,561,623,791,762,854,909,966,712,742,746,693,648,564,590,800,814,731,836,722,782,704,695,585,586,620,528,931,720,778,933,925,1015,776,783,630,567,577,762,790,784,764,726,];
    
    chartRaw = ChartHelper.create('businessLicenseRaw', 'Monthly Count of New Business Licenses', source, 'Monthly Count of New Business Licenses', '#c30c30', rawData, startDate, 'month');
    
    //seasonally adjusted 
    var seasonData = [0.92,1.2,1.29,1.1,1.16,1.21,0.96,1.04,0.76,0.95,0.96,0.7,0.9,1.12,1.26,1.09,1.16,1.2,0.99,1.04,0.81,0.96,0.95,0.74,0.88,1.05,1.23,1.08,1.15,1.19,1.03,1.05,0.85,0.97,0.93,0.78,0.85,0.98,1.2,1.07,1.14,1.18,1.07,1.07,0.9,0.98,0.91,0.81,0.83,0.9,1.16,1.1,1.1,1.2,1.1,1.13,0.95,0.99,0.88,0.81,0.82,0.79,1.16,1.13,1.09,1.19,1.14,1.2,1,1.01,0.86,0.81,0.81,0.7,1.16,1.15,1.09,1.18,1.18,1.27,1.05,1.03,0.83,0.8,0.81,0.62,1.17,1.18,1.1,1.16,];
    
    seasonData = ChartHelper.create('businessLicenseSeason', 'Seasonal Effect on New Business Licenses', source, 'Seasonal effect', '#C09853', seasonData, startDate, 'month');
    
  }); 
});