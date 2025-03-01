document
  .getElementById("btn-random-color")
  .addEventListener("click", function () {
    const colorName = [
      "#FFEB3B", "#FF5722", "#4CAF50", "#2196F3", "#9C27B0", "#673AB7","#E91E63", "#00BCD4","#009688","#FF9800", "#3F51B5","#8BC34A", "#FF4081", "#CDDC39", "#607D8B", "#795548", "#FF5722","#2196F3","#9E9E9E", "#607D8B", "#FFC107", "#00C853", "#03A9F4", "#FF9800", "#FF5252", "#00B8D4","#8D6E63","#F44336",
      "#A5D6A7","#9C27B0"
    ];

    const randomColor = Math.floor(Math.random() * colorName.length);
    document.body.style.backgroundColor = colorName[randomColor];
  });

  document.getElementById('discover-something').addEventListener('click', function(){
    window.location.href = 'main.html';
  })

  const newDate = (new Date()).toString().split(' ')
  document.getElementById('date').innerHTML = `<h1>${newDate[0]},</h1>`
  document.getElementById('new-date').innerText = ` ${newDate[1]} ${newDate[2]} ${newDate[3]}`
  document.getElementById('new-date').style.fontWeight = 'bold'
  document.getElementById('date').style.textAlign = 'start'

const newBtn = document.querySelectorAll('.btn-click');
let taskNumber = 6;
let navNumber = 23;
let count = 0;
let btnCount = newBtn.length;
for(const btn of newBtn){
    btn.addEventListener('click', function(){
        alert('Board Updated Successfully');
        btn.disabled = true;
        if(taskNumber > 0 ){
            taskNumber --;
            navNumber ++;
        }
        document.getElementById('task-number').innerText = taskNumber;
        document.getElementById('nav-number').innerText = navNumber;
        count++;
        if(count === btnCount){
            alert('Congrates!!! You have Completed all the Current Task');
        }
       
        const taskTitle = btn.closest('.rounded-lg').querySelector('.task-title').innerText;
        const activityLog = document.getElementById('activity-log');
        const li = document.createElement('li');
       li.innerText = `You have completed the task "${taskTitle}" at ${new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric',second:'numeric', hour12: true })}`
       li.classList.add('p-2','mt-3', 'rounded-lg', 'shadow-md', 'font-semibold','bg-gray-200')
        activityLog.appendChild(li);
    })
}

document.getElementById('clear-history-btn').addEventListener('click', function(){
    document.getElementById('activity-log').innerHTML = '';
})
