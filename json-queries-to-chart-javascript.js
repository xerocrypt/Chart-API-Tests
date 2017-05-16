var pathologyCount = 0;
var radiologyCount = 0;
var cardiologyCount = 0;
var unknownCount = 0;

var myMessageType = [];
var myMessagesProcessed = [];
var myDate = [];
var myHealthBoard = [];
var myHealthBoardDescription = [];

$.getJSON("/api/prMessagesProcessed_Result/",
function (Data)
{
    // The variable name 'Data' now refers to the whole JSON object
    $.each(Data, function (key, val)
    {
        // Displays a table of the JSON data, just to show the Web API is working
        var str = val.Date + ' ---- ' + val.MessagesProcessed + ' ---- ' + val.MessageType + ' ---- ' + val.HealthBoard + ' ---- ' + val.HealthBoardDescription;
        $('<li/>', { text: str }).appendTo($('#items'));

        // Push all data into an array containing everything
        // Probably not required here
        var everything = [];
        everything.push(Data);

        for (var i in Data)
        {
            var index = -1;
            myMessageType.push(Data[i].MessageType);
            myMessagesProcessed.push(Data[i].MessagesProcessed);
            myDate.push(Data[i].Date);
            myHealthBoard.push(Data[i].HealthBoard);
            myHealthBoardDescription.push(Data[i].HealthBoardDescription);
        }

        // Populate several arrays from initial JSON objects
        // and produce counts of each one.
        for (var i = 0; i < myMessageType.length; i++)
        {
            if (myMessageType[i] == "Pathology")
            pathologyCount++;
        }
        for (var i = 0; i < myMessageType.length; i++)
        {
            if (myMessageType[i] == "Radiology")
            radiologyCount++;
        }
        for (var i = 0; i < myMessageType.length; i++)
        {
            if (myMessageType[i] == "Cardiology")
            cardiologyCount++;
        }
        for (var i = 0; i < myMessageType.length; i++)
        {
            if (myMessageType[i] == "Unknown")
            unknownCount++;
        }
