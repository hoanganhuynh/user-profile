var myTopic = document.querySelector('.topic'); /* chon div co class là topic */
var myTable = document.querySelector('.showOneTopic');  /* chọn bảng chứa thông tin sau khi nhấn vào div.topic */
if (myTable && myTopic) {
    myTopic.addEventListener('click', function() {
        myTable.classList.add('showExeTopic');
    });
}
