const btn1 = document.getElementById('btn-1')
const pName = document.getElementById('pname')
const pMobile = document.getElementById('pmobile')
const bloodGroup = document.getElementById('blood-group')
const btn = document.querySelector('.p-btn')
const patientList = document.getElementById('patient-list')
const dBtn = document.querySelector('.d-btn')
const dName = document.getElementById('dname')
const dEmail = document.getElementById('demail')
const dMobile = document.getElementById('dmobile')
const dSpeciality = document.getElementById('dspeciality')
const doctorList = document.getElementById('doctor-list')


btn1.addEventListener('click', function (e) {
    e.preventDefault()
    console.log('form submitted')
    // document.getElementById('btn-1').classList.add('hidden')
    if (sel1.value == "Patient") {
        document.getElementById('patient-form').classList.remove('hidden')
        document.getElementById('doctor-form').classList.add('hidden')
        btn.addEventListener('click', function (e) {
            e.preventDefault()
            console.log('patient form submitted')
            const newRow = document.createElement('tr');
            const newName = document.createElement('td')
            newName.innerHTML = pName.value
            newRow.appendChild(newName)

            const newMobile = document.createElement('td')
            newMobile.innerHTML = pMobile.value
            newRow.appendChild(newMobile)

            const newBG = document.createElement('td')
            newBG.innerHTML = bloodGroup.value
            newRow.appendChild(newBG)

            patientList.appendChild(newRow)
        })
    }
    if (sel1.value == "Doctor") {
        document.getElementById('doctor-form').classList.remove('hidden')
        document.getElementById('patient-form').classList.add('hidden')
        dBtn.addEventListener('click', function (e) {
            e.preventDefault()
            console.log('doctor form submitted')
            const newRow = document.createElement('tr');
            const newName = document.createElement('td')
            newName.innerHTML = dName.value
            newRow.appendChild(newName)

            const newEmail = document.createElement('td')
            newEmail.innerHTML = dEmail.value
            newRow.appendChild(newEmail)

            const newMobile = document.createElement('td')
            newMobile.innerHTML = dMobile.value
            newRow.appendChild(newMobile)

            const newSpeciality = document.createElement('td')
            newSpeciality.innerHTML = dSpeciality.value
            newRow.appendChild(newSpeciality)

            doctorList.appendChild(newRow)
        })
    }
})

