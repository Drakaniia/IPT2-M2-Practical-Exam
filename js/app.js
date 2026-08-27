$(document).ready(function () {
    $('#addStudentButton').on('click', function () {
        var idNumber = $('#idNumber').val().trim();
        var firstName = $('#firstName').val().trim();
        var middleName = $('#middleName').val().trim();
        var lastName = $('#lastName').val().trim();

        if (!idNumber || !firstName || !middleName || !lastName) {
            alert('Please fill in all fields.');
            return;
        }

        var newStudentRow = '<tr>' +
            '<td>' + idNumber + '</td>' +
            '<td>' + firstName + '</td>' +
            '<td>' + middleName + '</td>' +
            '<td>' + lastName + '</td>' +
            '</tr>';

        $('#table-content').append(newStudentRow);

        $('#idNumber').val('');
        $('#firstName').val('');
        $('#middleName').val('');
        $('#lastName').val('');
    });

    $('#addSubject').on('click', function () {
        var subjectCode = $('#subjectCode').val().trim();
        var subjectName = $('#subjectName').val().trim();
        var units = $('#units').val().trim();

        if (!subjectCode || !subjectName || !units) {
            alert('Please fill in all fields.');
            return;
        }

        var newSubjectRow = '<tr>' +
            '<td>' + subjectCode + '</td>' +
            '<td>' + subjectName + '</td>' +
            '<td>' + units + '</td>' +
            '</tr>';

        $('#table-content').append(newSubjectRow);

        $('#subjectCode').val('');
        $('#subjectName').val('');
        $('#units').val('');
    });
});
