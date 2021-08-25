const btn = document.getElementById('btn-1')
// const form = document.querySelector('#form')
const pName = document.getElementById('pname')
const pMobile = document.getElementById('pmobile')
const bloodGroup = document.getElementById('blood-group')
const pBtn = document.querySelector('.p-btn')
const patientList = document.getElementById('patient-list')
const dBtn = document.querySelector('.d-btn')
const dName = document.getElementById('dname')
const dEmail = document.getElementById('demail')
const dMobile = document.getElementById('dmobile')
const dSpeciality = document.getElementById('dspeciality')
const doctorList = document.getElementById('doctor-list')


btn.addEventListener('click', function (e) {
    e.preventDefault()
    console.log('form submitted')
    // document.getElementById('btn-1').classList.add('hidden')
    if (sel1.value == "Patient") {
        document.getElementById('patient-form').classList.remove('hidden')
        document.getElementById('doctor-form').classList.add('hidden')
        pBtn.addEventListener('click', function (e) {
            e.preventDefault()
            console.log('patient form submitted')
            const patientRow = document.createElement('tr');
            const patientName = document.createElement('td')
            patientName.innerHTML = pName.value
            patientRow.appendChild(patientName)

            const patientMobile = document.createElement('td')
            patientMobile.innerHTML = pMobile.value
            patientRow.appendChild(patientMobile)

            const patientBG = document.createElement('td')
            patientBG.innerHTML = bloodGroup.value
            patientRow.appendChild(patientBG)

            patientList.appendChild(patientRow)
        })
    }
    if (sel1.value == "Doctor") {
        document.getElementById('doctor-form').classList.remove('hidden')
        document.getElementById('patient-form').classList.add('hidden')
        dBtn.addEventListener('click', function (e) {
            e.preventDefault()
            console.log('doctor form submitted')
            const doctorRow = document.createElement('tr');
            const doctorName = document.createElement('td')
            doctorName.innerHTML = dName.value
            doctorRow.appendChild(doctorName)

            const doctorEmail = document.createElement('td')
            doctorEmail.innerHTML = dEmail.value
            doctorRow.appendChild(doctorEmail)

            const doctorMobile = document.createElement('td')
            doctorMobile.innerHTML = dMobile.value
            doctorRow.appendChild(doctorMobile)

            const doctorSpeciality = document.createElement('td')
            doctorSpeciality.innerHTML = dSpeciality.value
            doctorRow.appendChild(doctorSpeciality)

            doctorList.appendChild(doctorRow)
        })
    }
})

