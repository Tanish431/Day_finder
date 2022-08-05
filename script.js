console.log("If you are here, you are trying to find errors and you are happy or sad(depends on you) to see that there is none :)")
const copt29 = document.createElement("option")
const copt30 = document.createElement("option")
const copt31 = document.createElement("option")
copt29.value = "29"
copt29.text = "29"
copt30.value = "30"
copt30.text = "30"
copt31.value = "31"
copt31.text = "31"
var paragraph = document.getElementById("final")
var scyear = document.getElementById('year')
var scmon = document.getElementById('month')
var scdate = document.getElementById('date')
scdate.addEventListener('change', clear)
scyear.addEventListener('change',check)
scyear.addEventListener('change', clear)
function clear(){
    paragraph.textContent = "THE WEEKDAY: "
    odd=0
    document.getElementById("subm").disabled = false;
}
scmon.addEventListener('change', check)
function check(){
    var pyearfm = document.getElementById('year').value
    var psecfm = Math.floor(Number(pyearfm)%100)
    odd=0
    paragraph.textContent = "THE WEEKDAY: "
    if(scmon.selectedIndex==0){
        date.add(copt29, null)
        date.add(copt30, null)
        date.add(copt31, null)
    }else if(scmon.selectedIndex==1){
        date.add(copt29, null)
        var febc = Number(scdate.options[28].value)
        if(psecfm!=0&&pyearfm%4==0){ 
            while(febc>29){
            date.remove(28)
            febc=Number(scdate.options[28].value)
            }
        }else if(psecfm==0&&pyearfm%400==0){
            while(febc>29){
                date.remove(28)
                febc=Number(scdate.options[28].value)
            }
        }else{
            while(febc>28){
                date.remove(28)
                febc=Number(scdate.options[28].value)
            }   
        }
    }else if(scmon.selectedIndex==2){
        date.add(copt29, null)
        date.add(copt30, null)
        date.add(copt31, null)
    }else if(scmon.selectedIndex==3){
        date.add(copt29, null)
        date.add(copt30, null) 
        date.remove(28)
    }else if(scmon.selectedIndex==4){
        date.add(copt29, null)
        date.add(copt30, null)
        date.add(copt31, null)
    }else if(scmon.selectedIndex==5){
        date.add(copt29, null)
        date.add(copt30, null)
        date.remove(28)   
    }else if(scmon.selectedIndex==6){
        date.add(copt29, null)
        date.add(copt30, null)
        date.add(copt31, null)
    }else if(scmon.selectedIndex==7){
        date.add(copt29, null)
        date.add(copt30, null)
        date.add(copt31, null)
    }else if(scmon.selectedIndex==8){
        date.add(copt29, null)
        date.add(copt30, null)
        date.remove(28)
    }else if(scmon.selectedIndex==9){
        date.add(copt29, null)
        date.add(copt30, null)
        date.add(copt31, null)
    }else if(scmon.selectedIndex==10){
        date.add(copt29, null)
        date.add(copt30, null)
        date.remove(28)
    }else if(scmon.selectedIndex==11){
        date.add(copt29, null)
        date.add(copt30, null)
        date.add(copt31, null)
    }
    document.getElementById("subm").disabled = false
}

function form_process(){
    var pyear = document.getElementById('year').value
    var psec = Math.floor(Number(pyear)%100)
    var year = pyear-1
    var yfir = Math.floor(Number(year)/100)
    var sec = Math.floor(Number(year)%100)
    var odd = 0
    const round = yfir-(yfir%4)
    var sub = Math.abs(yfir-round)
    //year
    if(sub==0){
        odd+=0
    }else if(sub==1){
        odd+=5
    }else if(sub==2){
        odd+=3
    }else if(sub==3){
        odd+=1
    }
    var lpy = Math.floor(sec/4)
    odd += sec+lpy
    console.log(odd)

    //month
    var opt = document.getElementById('month').options[1]
    if(psec==0){
        if(pyear%400==0){
            opt.value = 1
        } else if(pyear%400!=0){
            opt.value = 0
        }
    } else if(psec!=0){
        if(pyear%4==0){
            opt.value = 1   
        } else{
            opt.value = 0
        }
    }
    var jan = document.getElementById('month').options[0].value
    var feb = document.getElementById('month').options[1].value
    var mar = document.getElementById('month').options[2].value
    var apr = document.getElementById('month').options[3].value
    var may = document.getElementById('month').options[4].value
    var jun = document.getElementById('month').options[5].value
    var jul = document.getElementById('month').options[6].value
    var aug = document.getElementById('month').options[7].value
    var sep = document.getElementById('month').options[8].value
    var oct = document.getElementById('month').options[9].value
    var nov = document.getElementById('month').options[10].value

    //selected index
    var scm = document.getElementById('month').selectedIndex
    var mon = [0,1,2,3,4,5,6,7,8,9,10,11]
    var i = 11
    if(scm!=0){
        while(i>(Number(scm)-1)){
            mon.pop()
            i--
        }
        console.log(odd)
        if(mon.at(-1)==10){
            odd = odd+Number(jan)+Number(feb)+Number(mar)+Number(apr)+Number(may)+Number(jun)+Number(jul)+Number(aug)+Number(sep)+Number(oct)+Number(nov)
        } else if(mon.at(-1)==9){
            odd = odd+Number(jan)+Number(feb)+Number(mar)+Number(apr)+Number(may)+Number(jun)+Number(jul)+Number(aug)+Number(sep)+Number(oct)
        } else if(mon.at(-1)==8){
            odd = odd+Number(jan)+Number(feb)+Number(mar)+Number(apr)+Number(may)+Number(jun)+Number(jul)+Number(aug)+Number(sep)
        } else if(mon.at(-1)==7){
            odd = odd+Number(jan)+Number(feb)+Number(mar)+Number(apr)+Number(may)+Number(jun)+Number(jul)+Number(aug)
        } else if(mon.at(-1)==6){
            odd = odd+Number(jan)+Number(feb)+Number(mar)+Number(apr)+Number(may)+Number(jun)+Number(jul)
        } else if(mon.at(-1)==5){
            odd = odd+Number(jan)+Number(feb)+Number(mar)+Number(apr)+Number(may)+Number(jun)
        } else if(mon.at(-1)==4){
            odd = odd+Number(jan)+Number(feb)+Number(mar)+Number(apr)+Number(may)
        } else if(mon.at(-1)==3){
            odd = odd+Number(jan)+Number(feb)+Number(mar)+Number(apr)
        } else if(mon.at(-1)==2){
            odd = odd+Number(jan)+Number(feb)+Number(mar)
        } else if(mon.at(-1)==1){
            odd = odd+Number(jan)+Number(feb)
        } else if(mon.at(-1)==0){
            odd = odd+Number(jan)
        }
    }else {
        odd+=0
    }
    console.log(odd)
    //date
    var date = document.getElementById("date").value
    odd = odd+Number(date)
    console.log(odd)
    var weekday = odd%7
    //final
    var paragraph = document.getElementById("final")
    if(weekday==1){
        paragraph.textContent += "Monday"
    }
    if(weekday==2){
        paragraph.textContent += "Tuesday"
    }
    if(weekday==3){
        paragraph.textContent += "Wednesday"
    }
    if(weekday==4){
        paragraph.textContent += "Thursday"
    }
    if(weekday==5){
        paragraph.textContent += "Friday"
    }
    if(weekday==6){
        paragraph.textContent += "Saturday"
    }
    if(weekday==0){
        paragraph.textContent += "Sunday"
    }
    document.getElementById("subm").disabled = true;
}

