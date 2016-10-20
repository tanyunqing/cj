

	var mayDate=new Date();//获取日期
	var curMonth=mayDate.getMonth();//获取月份(0-11,0代表1�?)
	var curDate=mayDate.getDate()//获取日期
	var mytime=mayDate.toLocaleTimeString()// //获取当前时间
	var week=mayDate.getDay()
	weekDay=["星期�?", "星期一", "星期�?", "星期�?", "星期�?", "星期�?", "星期�?"]		
	curMonth+=1;	

					/*取得当前月份有几�?*/
							var date = new Date();
							
							//获取年份
							var year = date.getFullYear();
							
							//获取当前月份
							var mouth = date.getMonth() + 1;
							
							//定义当月的天数；
							var days ;
							
							//当月份为二月时，根据闰年还是非闰年判断天�?
							if(mouth == 2){
									days= year % 4 == 0 ? 29 : 28;
									
								}
								else if(mouth == 1 || mouth == 3 || mouth == 5 || mouth == 7 || mouth == 8 || mouth == 10 || mouth == 12){
									//月份为：1,3,5,7,8,10,12 时，为大�?.则天数为31�?
									days= 31;
								}
								else{
									//其他月份，天数为�?30.
									days= 30;
									
								}


	//+-------修改时间规律
	if(weekDay[week]==="星期一")
	{
		curDate+=2
	}
	else if(weekDay[week]==="星期�?")
	{
		curDate+=1;
	}
	else if(weekDay[week]==="星期�?")
	{
		curDate+=2;
		//curDate = days;
	}
	else if(weekDay[week]==="星期�?")
	{
		curDate+=1;
	}
	else if(weekDay[week]==="星期�?")
	{
		curDate+=2;
	}
	else if(weekDay[week]==="星期�?")
	{
		curDate+=1;
	}
	else
	{
		curDate;
	};
	

	//当月�?30�?
	if(days==30)
	{
		if(days-curDate<0){//超过当月天数
			curDate-=days;
			curMonth+=1;//把月份调到下个月�?
		}else{
			curDate;
			curMonth;
		}
		
	}
	else if(days==31)//当月31�?
	{

		if(days-curDate<0){//超过当月天数
			curDate-=days;
			curMonth+=1;//把月份调到下个月�?
		}else{
			curDate;
			curMonth;
		}
	};


//设置活动时间段的起始时间
var curDate_start = 20;//固定设置1�?
var curMonth_start = curMonth-1;//设置当月的上个月

	
	//JQ获取所有对�?
	$(function()
	{
		$(".curMonth").html(curMonth);
		$(".curDate").html(curDate);
		
		$(".curMonth_start").html(curMonth_start);
		$(".curDate_start").html(curDate_start);		
		
	});