function calculateGrade() {
    const eng = Number(document.getElementById('eng').value)
    const math = Number(document.getElementById('math').value)
    const phy = Number(document.getElementById('phy').value)
    const chem = Number(document.getElementById('chem').value)
    const comp = Number(document.getElementById('comp').value)

    const totalMarks = eng + math + phy + chem + comp
    const avgMarks = totalMarks / 5

    let grade 
    if(avgMarks >= 90){
        grade = "A"
    }
    else if(avgMarks >= 80 && avgMarks <=89){
        grade = "B"
    }
    else if(avgMarks >= 70 && avgMarks <=79){
        grade = "C"
    }
    else if(avgMarks >= 60 && avgMarks <=69){
        grade = "D"
    }
    else if(avgMarks < 60){
        grade = "F"
    }
    document.getElementById('total').textContent = totalMarks
    document.getElementById('avg').textContent = avgMarks.toFixed(2)
    document.getElementById('grade').textContent = grade
}