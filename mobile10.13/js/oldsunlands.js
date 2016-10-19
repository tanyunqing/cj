if(!basePath){
   basePath=$("#basePath").val();
   if(!basePath){
	   basePath="";
   }
}
//抽奖
function getActivityPrize(activityId,callback){
	var msg=new Object();
	 msg.activityId=activityId;
	 $.ajax({
			url:basePath+"/ajaxActivityPrize.action",
			type: "post",
			data:{"activityId":activityId},
			async:true,
			dataType:"json",
			success: function(data){
				if(data.success){
				   if(data.prizeId){
					  msg.prizeId=data.prizeId;
					  msg.prizeName=data.prizeName;
					  callback(msg);
				   }else{
					  alert("你的运气不太好哦!");
				   }
				}else{
					  alert("系统繁忙，请稍后再试!");
				}
			}
    });
}
//添加留言
function tuiguang_message_activity(messageForm,myMsg,callback){
	var phone=$("#"+messageForm).find("input[name='msg.phone']").val();
	var photo=/^1\d{10}$/;
	if(phone==""){
		return false;
	}
	if(photo.test(phone)==false){
		$("#"+messageForm).find("input[name='msg.phone']").focus();
		alert("请输入11位有效的手机号!!!");
		return false;
	}else{
		var msg=new Object();
		msg.phone=$("#"+messageForm).find("input[name='msg.phone']").val();
		msg.name=$("#"+messageForm).find("input[name='msg.name']").val();
		msg.field1=$("#"+messageForm).find("input[name='msg.field1']").val();
		msg.field2=$("#"+messageForm).find("input[name='msg.field2']").val();
		msg.field3=$("#levelMessageForm").find("input[name='service']").val();
		msg.remark=$("#"+messageForm).find("input[name='msg.remark']").val();
		msg.email=$("#"+messageForm).find("input[name='msg.email']").val();
		msg.school_code=$("#"+messageForm).find("input[name='msg.school_code']").val();
		msg.message_type=$("#"+messageForm).find("input[name='msg.message_type']").val();
		msg.message_type=myMsg.prizeId+":"+myMsg.prizeName+"-->"+msg.message_type;
		msg.project_code=$("#"+messageForm).find("input[name='msg.project_code']").val();
		$.ajax({
			url:basePath+"/message.htm",
			data:{
				"msg.phone":msg.phone,
				"msg.field1":msg.field1,
				"msg.field2":msg.field2,
				"msg.field3":msg.field3,
				"msg.remark":msg.remark,
				"msg.email" :msg.email,
				"msg.school_code":msg.school_code,
				"msg.message_type":msg.message_type,
				"msg.name":msg.name,
				"msg.project_code":msg.project_code
			},
			type: "post",
			success: function(data){
				if(data.status=='true'){
					myMsg.mobile=msg.phone;
					callback(myMsg);
				}else{
					$('.enterinput_one').val("验证失败!!!"); 
				}
			}
		});
	}
 }
//发送奖品短信
function sendPrizeSms(prizeId,mobile,callback){
	$.ajax({
		url:basePath+"/ajaxSendPrizeSms.action",
		data:{
			"mobile":mobile,
			"prizeId":prizeId
		},
		type: "post",
		success: function(data){
			callback(data.success);
		}
	});
}
//注册赠送
function tuiguang_reg_and_reward_live_class(classId,service){
	$.ajax({
		url: encodeURI(basePath+"/rewardLiveClass.htm?classId="+classId),
		type: "post",
		success: function(data){
			if(data.succ=='true'){
				if(service!=null&&service!=""){
					alert("课程已赠送!!!");
					window.open(service, "_blank");
				}else{
					alert("课程已赠送,前往个人中心查看赠送课程!!!");
					window.location.href="http://i.sunlands.com/portal-war/pt_uc/faceCourse/selectFaceCourses.action";
				}
			}else{
				alert("课程赠送失败!!!");
			}
		}
	});
}
//无弹出框验证
function tuiguang_message_open(messageForm,callback,messageId,schoolId){
	var phone=$("#"+messageForm).find("input[name='msg.phone']").val();
	var photo=/^1\d{10}$/;
	if(phone==""){
		$("#"+messageForm).find("input[name='msg.phone']").focus();
		alert("请输入11位有效的手机号!!!");
		return false;
	}
	if(photo.test(phone)==false){
		$("#"+messageForm).find("input[name='msg.phone']").focus();
		alert("请输入11位有效的手机号!!!");
		return false;
	}else{
		 $.ajax({
			url: encodeURI(encodeURI(basePath+"/message.htm?msg.phone="+$("#"+messageForm).find("input[name='msg.phone']").val()+"&msg.field1="+$("#"+messageForm).find("input[name='msg.field1']").val()+"&msg.field2="+$("#"+messageForm).find("input[name='msg.field2']").val()+"&msg.field3="+$("#levelMessageForm").find("input[name='service']").val()+"&msg.remark="+$("#"+messageForm).find("input[name='msg.remark']").val()+"&msg.email="+$("#"+messageForm).find("input[name='msg.email']").val()+"&msg.school_code="+$("#"+messageForm).find("input[name='msg.school_code']").val()+"&msg.message_type="+$("#"+messageForm).find("input[name='msg.message_type']").val()+"&msg.name="+$("#"+messageForm).find("input[name='msg.name']").val()+"&msg.project_code="+$("#"+messageForm).find("input[name='msg.project_code']").val())),
			type: "post",
			success: function(data){
				if(data.status=='true'){
					var msg=new Object();
					msg.messageId=messageId;
					msg.schoolId=schoolId;
					msg.phone=$("#"+messageForm).find("input[name='msg.phone']").val();
					msg.name=$("#"+messageForm).find("input[name='msg.name']").val();
					msg.field1=$("#"+messageForm).find("input[name='msg.field1']").val();
					msg.field2=$("#"+messageForm).find("input[name='msg.field2']").val();
					msg.field3=$("#"+messageForm).find("input[name='msg.field3']").val();
					msg.service=$("#levelMessageForm").find("input[name='service']").val();
					msg.remark=$("#"+messageForm).find("input[name='msg.remark']").val();
					msg.email=$("#"+messageForm).find("input[name='msg.email']").val();
					msg.school_code=$("#"+messageForm).find("input[name='msg.school_code']").val();
					msg.message_type=$("#"+messageForm).find("input[name='msg.message_type']").val();
					msg.project_code=$("#"+messageForm).find("input[name='msg.project_code']").val();
					callback(msg);
				}else{
					alert("留言失败,您的留言超过三次!!!"); 
				}
			}
		});
	}
}
//无弹出框验证且手机号可以为空，但是QQ号不能为空
function tuiguang_message_open_new(messageForm,callback,messageId,schoolId){
	var qqNumber=$("#"+messageForm).find("input[name='msg.name']").val();
	var qqNumberReg=/^\d{5,}$/;
	if(qqNumber==""){
		$("#"+messageForm).find("input[name='msg.name']").focus();
		alert("请输入有效的QQ号!!!");
		return false;
	}
	if(qqNumberReg.test(qqNumber)==false){
		$("#"+messageForm).find("input[name='msg.name']").focus();
		alert("请输入有效的QQ号!!!");
		return false;
	}else{
		 $.ajax({
			url: encodeURI(encodeURI(basePath+"/messageNew.htm?msg.phone="+$("#"+messageForm).find("input[name='msg.phone']").val()+"&msg.field1="+$("#"+messageForm).find("input[name='msg.field1']").val()+"&msg.field2="+$("#"+messageForm).find("input[name='msg.field2']").val()+"&msg.field3="+$("#"+messageForm).find("input[name='msg.field3']").val()+"&msg.remark="+$("#"+messageForm).find("input[name='msg.remark']").val()+"&msg.email="+$("#"+messageForm).find("input[name='msg.email']").val()+"&msg.school_code="+$("#"+messageForm).find("input[name='msg.school_code']").val()+"&msg.message_type="+$("#"+messageForm).find("input[name='msg.message_type']").val()+"&msg.name="+$("#"+messageForm).find("input[name='msg.name']").val()+"&msg.project_code="+$("#"+messageForm).find("input[name='msg.project_code']").val()+"&callback="+callback)),
			type: "post",
			dataType:"jsonp",
			jsonp:callback,
			success: function(data){
				if(data.status=='true'){
					var msg=new Object();
					msg.messageId=messageId;
					msg.schoolId=schoolId;
					msg.phone=$("#"+messageForm).find("input[name='msg.phone']").val();
					msg.name=$("#"+messageForm).find("input[name='msg.name']").val();
					msg.field1=$("#"+messageForm).find("input[name='msg.field1']").val();
					msg.field2=$("#"+messageForm).find("input[name='msg.field2']").val();
					msg.field3=$("#"+messageForm).find("input[name='msg.field3']").val();
					msg.service=$("#levelMessageForm").find("input[name='service']").val();
					msg.remark=$("#"+messageForm).find("input[name='msg.remark']").val();
					msg.email=$("#"+messageForm).find("input[name='msg.email']").val();
					msg.school_code=$("#"+messageForm).find("input[name='msg.school_code']").val();
					msg.message_type=$("#"+messageForm).find("input[name='msg.message_type']").val();
					msg.project_code=$("#"+messageForm).find("input[name='msg.project_code']").val();
					callback(msg);
				}else{
					alert("留言失败,您的留言超过三次!!!"); 
				}
			}
		});
	}
}

//发送短信验证码
function getdenticode(messageForm){
	var phone=$("#"+messageForm).find("input[name='msg.phone']").val();
	var photo=/^1\d{10}$/;
	var isSendSucc = 0;
	if(phone==""){
		$("#"+messageForm).find("input[name='msg.phone']").focus();
		alert("请输入11位有效的手机号!!!");
		return false;
	}
	if(photo.test(phone)==false){
		$("#"+messageForm).find("input[name='msg.phone']").focus();
		alert("请输入11位有效的手机号!!!");
		return false;
	}else{
		$.ajax({
			url:encodeURI(encodeURI(basePath+"/getIdentifingCode.htm?tel="+phone+"&userParam="+$("#userParam").val()+"&callback=getCodeCallBack")),
			type:'post',
			dataType: "jsonp",
			jsonp:callback,
			success:function (data){
				isSendSucc = data.status;
				if(isSendSucc == 0){
					alert("网络故障，请检查网络！");
				}else if(isSendSucc == -3){
					alert("请输入11位手机号码！");
				}else if(isSendSucc == -2){
					alert("发送短信失败！");
				}else if(isSendSucc == 1){
					alert("短信验证码已发出，请注意查收！");
				}else{
					alert("发送短信失败，请检查！");
				}
			}
		});
		
	}
}
function getCodeCallBack(data){
	var isSendSucc = data.status;
	if(isSendSucc == 0){
		alert("网络故障，请检查网络！");
	}else if(isSendSucc == -3){
		alert("请输入11位手机号码！");
	}else if(isSendSucc == -2){
		alert("发送短信失败！");
	}else if(isSendSucc == 1){
		alert("短信验证码已发出，请注意查收！");
	}else{
		alert("发送短信失败，请检查！");
	}
}
//检查验证码，留言
function tuiguang_message_code(messageForm,callback,messageId,schoolId){
	var phone=$("#"+messageForm).find("input[name='msg.phone']").val();
	var photo=/^1\d{10}$/;
	if(phone==""){
		$("#"+messageForm).find("input[name='msg.phone']").focus();
		alert("请输入11位有效的手机号!!!");
		return false;
	}
	var mobileCode=$("#"+messageForm).find("input[name='mobile_code']").val();
	if(null == mobileCode || ''==mobileCode){
		$("#"+messageForm).find("input[name='mobile_code']").focus();
		alert("请输入获取的验证码！");
		return false;
	}
	var codeTest = /^d{6}$/;
	if(codeTest.test(mobileCode)){
		$("#"+messageForm).find("input=[name='mobile_code']").focus();
		alert("请输入正确的验证码！");
	}
	if(photo.test(phone)==false){
		$("#"+messageForm).find("input[name='msg.phone']").focus();
		alert("请输入11位有效的手机号!!!");
		return false;
	}else{
		$.ajax({
			url:encodeURI(encodeURI(basePath+"/checkIdentifingCode.htm?tel="+phone+"&identifingCode="+mobileCode+"&callback=ValidCodeCallBack")),
			type:'post',
			dataType:'jsonp',
			jsonp:callback,
			success:function(data){
				if(data.status==1){
					 ValidCodeCallBack(data);
				}else if(data.status==2){
					alert("验证码错误！");
				}else if(data.status==3){
					alert("发送请求失败！");
				}else{
					alert("发送请求失败！");
				}
			}
		});
	}
}
function ValidCodeCallBack(callData){
	if(callData.status==1){
		tuiguang_message_jsonp('messageForm',callback,103,35);
	}else if(callData.status==2){
		alert("验证码错误！");
	}else if(callData.status==3){
		alert("发送请求失败！");
	}else{
		alert("发送请求失败！");
	}
}
//获取优惠码
function getCoupon(userName,mobile,remark){
	var result={status:-2};
	$.ajax({
		url:basePath+"/trial/ajaxGetCoupon.htm",
		data:{
			"tel":mobile,
			"userName":userName,
			"remark":remark.trim(),
			"projectId":$("#projectId").val(),
			"projectName":$("#proName").val(),
			"currentPage":location.href,
			'userParam':$("#userParam").val(),
			'token':9786513568
		},
		type: "post",
		dataType:'json',
		async:false,
		success: function(data){
			result=data;
		}
	});
	return result;
}