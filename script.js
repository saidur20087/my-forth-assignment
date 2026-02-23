// html from Section
const totalCountText = document.getElementById('total-count');
const interviewCountText = document.getElementById('interview-count');
const rejectedCountText = document.getElementById('rejected-count');
const jobsContainer = document.getElementById('jobs-container');
const availableJobsText = document.getElementById('available-jobs-count'); 

// console.log(totalCountText);
// console.log(interviewCountText);
// console.log(rejectedCountText);
// console.log(availableJobsText);

// Cathing Tabs
const allBtn = document.getElementById('all-tab-btn');
const interviewTabBtn = document.getElementById('interview-tab-btn');
const rejectedTabBtn = document.getElementById('rejected-tab-btn');

// console.log(allBtn);

// Conthing. FilTering & No Jobs
function updateUI(filterType = 'all') {
   // Conthing All Cards
    const allCards = Array.from(jobsContainer.querySelectorAll('[id^="card-"]'));

    // console.log(allCards);

    // Toggole Funtion
const buttons = [allBtn, interviewTabBtn, rejectedTabBtn];

buttons.forEach(btn => {
    btn.classList.remove('bg-[#4489FE]', 'text-white');
    btn.classList.add('bg-white', 'text-gray-600');
});

const selectedBtn = document.getElementById(`${filterType}-tab-btn`);
if (selectedBtn) {
    selectedBtn.classList.add('bg-[#4489FE]', 'text-white');
    selectedBtn.classList.remove('bg-white', 'text-gray-600');
}


//    Dhashboard Count Updated
    const interviewCount = allCards.filter(c => c.classList.contains('status-interview')).length;
    const rejectedCount = allCards.filter(c => c.classList.contains('status-rejected')).length;

    // console.log(interviewCount);
    // console.log(rejectedCount);
    

    totalCountText.innerText = allCards.length;
    interviewCountText.innerText = interviewCount;
    rejectedCountText.innerText = rejectedCount;

     // console.log(totalCountText);
     // console.log(interviewCountText);
     // console.log(rejectedCountText);

// Filtering Cards
    let visibleCount = 0;
    allCards.forEach(card => {
        if (filterType === 'all') {
            card.style.display = 'block';
            visibleCount++;
        } else if (filterType === 'interview') {
            const isInterview = card.classList.contains('status-interview');
            card.style.display = isInterview ? 'block' : 'none';
            if (isInterview) visibleCount++;
        } else if (filterType === 'rejected') {
            const isRejected = card.classList.contains('status-rejected');
            card.style.display = isRejected ? 'block' : 'none';
            if (isRejected) visibleCount++;
        }
    });

// Available Jobs Uated
    availableJobsText.innerText = `${visibleCount} Jobs`;

    // console.log(availableJobsText);

//  No jobs available View
    const emptyState = document.getElementById('empty-state');
    if (visibleCount === 0) {
        if (!emptyState) {
            const noJobHTML = `
            <div id="empty-state" class="text-center py-16 bg-white rounded-xl border-2 border-dashed border-gray-100 w-full">
                <img src="https://img.icons8.com/color/96/000000/document.png" class="mx-auto mb-4 opacity-50" style="width: 80px;">
                <h3 class="text-xl font-semibold text-[#002C5C]">No jobs available</h3>
                <p class="text-gray-400">Check back soon for new job opportunities</p>
            </div>`;
            jobsContainer.insertAdjacentHTML('beforeend', noJobHTML);
        }
    } else {
        if (emptyState) emptyState.remove(); 
    }
}

// Delete, Interview, Rejected Crad evet
jobsContainer.addEventListener('click', function(event) {
    const clickedElement = event.target;
   
    const card = clickedElement.closest('div[id^="card-"]');
 // console.log(card);

    if (!card) return;

     // Interview Button
    if (clickedElement.classList.contains('card-interview-btn')) {
        card.classList.add('status-interview');
        card.classList.remove('status-rejected');
    }

    // Rejected Button
    if (clickedElement.classList.contains('card-rejected-btn')) {
        card.classList.add('status-rejected');
        card.classList.remove('status-interview');
    }

    // Delete Button
    if (clickedElement.closest('#delete-btn')) {
        if (confirm("Are you sure you want to delete this?")) {
            card.remove();
        }
    }

    updateUI(); 
});

// Tab Button Click & Filter
allBtn.addEventListener('click', () => updateUI('all'));
// console.log(allBtn);
interviewTabBtn.addEventListener('click', () => updateUI('interview'));
// console.log(interviewTabBtn);
rejectedTabBtn.addEventListener('click', () => updateUI('rejected'));
// console.log(rejectedTabBtn);


updateUI();