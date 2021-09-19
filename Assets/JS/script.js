var ele1 = document.querySelector('#element1')
var ele2 = document.querySelector('#element2')
var ele3 = document.querySelector('#element3')
var ele4 = document.querySelector('#element4')
var ele5 = document.querySelector('#element5')
var ele6 = document.querySelector('#element6')

var daily = document.querySelector('#daily')

var weekly = document.querySelector('#weekly')

var monthly = document.querySelector('#monthly')

dailyFunction(ele1,ele2,ele3,ele4,ele5,ele6, daily, weekly, monthly)


function dailyFunction(ele1,ele2,ele3,ele4,ele5,ele6, daily, weekly, monthly){
    daily.style.color = 'white'
    weekly.style.color = 'hsl(236, 100%, 87%)'
    monthly.style.color = 'hsl(236, 100%, 87%)'

    ele1.innerHTML = '<strong> 5hrs</strong> Last Week - 7hrs'
    ele2.innerHTML = '<strong> 1hrs</strong> Last Week - 2hrs'
    ele3.innerHTML = '<strong> 0hrs</strong> Last Week - 1hrs'
    ele4.innerHTML = '<strong> 1hrs</strong> Last Week - 1hrs'
    ele5.innerHTML = '<strong> 1hrs</strong> Last Week - 3hrs'
    ele6.innerHTML = '<strong> 0hrs</strong> Last Week - 1hrs' 

}
    
function weeklyFunction(ele1,ele2,ele3,ele4,ele5,ele6, daily, weekly, monthly){
    weekly.style.color = 'white'
    daily.style.color = 'hsl(236, 100%, 87%)'
    monthly.style.color = 'hsl(236, 100%, 87%)'

    ele1.innerHTML = '<strong> 32hrs</strong> Last Week - 36hrs'
    ele2.innerHTML = '<strong> 10hrs</strong> Last Week - 8hrs'
    ele3.innerHTML = '<strong> 4hrs</strong> Last Week - 7hrs'
    ele4.innerHTML = '<strong> 4hrs</strong> Last Week - 5hrs'
    ele5.innerHTML = '<strong> 5hrs</strong> Last Week - 10hrs'
    ele6.innerHTML = '<strong> 2hrs</strong> Last Week - 2hrs'

} 

function monthlyFunction(ele1,ele2,ele3,ele4,ele5,ele6, daily, weekly, monthly){
    monthly.style.color = 'white'
    daily.style.color = 'hsl(236, 100%, 87%)'
    weekly.style.color = 'hsl(236, 100%, 87%)'

    ele1.innerHTML = '<strong> 103hrs</strong> Last Week - 128hrs'
    ele2.innerHTML = '<strong style="transition: 2s"> 23hrs</strong> Last Week - 29hrs'
    ele3.innerHTML = '<strong> 13hrs</strong> Last Week - 19hrs'
    ele4.innerHTML = '<strong> 1hrs</strong> Last Week - 18hrs'
    ele5.innerHTML = '<strong> 21hrs</strong> Last Week - 23hrs'
    ele6.innerHTML = '<strong> 7hrs</strong> Last Week - 11hrs'

}