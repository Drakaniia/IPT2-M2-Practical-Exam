// Add Student Function
$(document).ready(function () {
    $('#addStudentButton').on('click', function () {
        var idNumber = $('#idNumber').val().trim();
        var firstName = $('#firstName').val().trim();
        var middleName = $('#middleName').val().trim();
        var lastName = $('#lastName').val().trim();

        // Validate that all fields are filled
        if (!idNumber || !firstName || !middleName || !lastName) {
            alert('Please fill in all fields.');
            return;
        }

        // Create new table row
        var newRow = '<tr>' +
            '<td>' + idNumber + '</td>' +
            '<td>' + firstName + '</td>' +
            '<td>' + middleName + '</td>' +
            '<td>' + lastName + '</td>' +
            '</tr>';

        // Append the row to the table body
        $('#table-content').append(newRow);

        // Clear the form inputs
        $('#idNumber').val('');
        $('#firstName').val('');
        $('#middleName').val('');
        $('#lastName').val('');
    });
});
