function openNewTab(formGuid) {
    let isTriggered = false;
    alert(1);
    jQuery(document).click(function () {
        alert(2);
        if (!isTriggered) {
            alert(3);
            isTriggered = true;
            let win = window.open();
            win.location = 'PrintCaseReceive.aspx?formid=' + formGuid;
            win.opener = null;
            win.blur();
            window.focus();
        }
    });
    //$.ajax({
    //    url: "PrintCaseReceive.aspx?formid=fd71863d-4cb6-45c4-91a9-4c7d23adbc2e",
    //    dataType: "text",
    //    cache: false,
    //    success: function (data) {
    //        window.open('PrintCaseReceive.aspx?formid=fd71863d-4cb6-45c4-91a9-4c7d23adbc2e', '_blank');
    //    }
    //});
}
function ManagementCheck(GovName) {
    return CheckMang(GovName + "has already Management .. continue", '');
}
function deleteCheck(btn) {
    return Check(btn, 'Are you sure to delete?', '');
}
function BlockCheck(btn) {
    return Check(btn, 'Are you sure to Block this User?', '');
}
function SignUpf(reason) {
    return invokeAlert("Sign Up failed!", reason, 'warning', 5000);
}
function SignUpS(link) {
    return invokeAlertWithLink("Welcome Registered successfully !", '', 'success', 4000, link);
}
function SignInF(reason) {
    return invokeAlert("Sign In failed!", reason, 'warning', 5000);
}

function ChangePasswordS(link) {
    return invokeAlertWithLink("Password changed successfully!", '', 'success', 3000, link);
}
function ChangePasswordF() {
    return invokeAlert("Password changed unsuccessfully !", '', 'warning', 3000);
}
function UnBlockCheck(btn) {
    return Check(btn, 'Are you sure to un Block this User?', '');
}
function VisibleTopic(btn) {
    return Check(btn, 'Are you sure to make this topic visible?', '');
}
function InVisibleTopic(btn) {
    return Check(btn, 'Are you sure to make this topic invisible?', '');
}
function CopyTopic(btn) {
    return Check(btn, 'Are you sure to copy this topic ?', '');
}
function ShowComment(btn) {
    return Check(btn, 'Are you sure to display this comment؟', '');
}
function HideComment(btn) {
    return Check(btn, 'Are you sure to hide this comment؟', '');
}
function CheckToDeactiveDonorPlan(btn) {
    return Check(btn, 'هل تريد الغاء التفعيل؟', 'الغاء التفعيل يلغي كل اسنادات الحالات');
}

function deletedS() {
    return invokeAlert("Deleted successfully!", '', 'success', 1000);
}
function blockedS() {
    return invokeAlert("Blocked successfully!", '', 'success', 2000);
}
function UnblockedS() {
    return invokeAlert("Un Blocked successfully!", '', 'success', 2000);
}
function deletedF(reson) {
    return invokeAlert("Delete failed!", reson, 'warning', 5000);
}
function CopyS() {
    return invokeAlert("Copied successfully!", '', 'success', 2000);
}

function savedS() {
    return invokeAlert("Data saved successfully!", '', 'success', 2000);
}
function savedSM(message) {
    return invokeAlert("Data saved successfully!", message, 'success', 2000);
}

function savedSL(link) {
    return invokeAlertWithLink("Data saved successfully!", '', 'success', 2000, link);
}
function savedF(reson) {
    return invokeAlert("Data saved failed!", reson, 'warning', 5000);
}

function HallSavedF(reson) {
    return invokeAlert("Failed !", reson, 'warning', 2000);
}

function DisplayCommentS() {
    return invokeAlert("Comment displayed successfully!", '', 'success', 2000);
}
function HideCommentS() {
    return invokeAlert("Comment hidden successfully!", '', 'success', 2000);
}

function selectwrong() {
    return invokeAlert('Please make sure all data is selected correctly !', '', 'warning', 5000);
}

function closeclick(id) {
    document.getElementById(id).click();
}
function CheckMang(ti, text) {
    Swal.fire({
        title: ti,
        html: text,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        cancelButtonText: "No",
        confirmButtonText: 'Yes',
        customClass: {
            title: 'din-bold',
            content: 'din-bold',
            confirmButton: 'din-bold',
            cancelButton: 'din-bold'
        }
    }).then((result) => {
        debugger
        if (result.isDismissed) {
            $("#GovId option").each(function () {
                this.selected = $(this).text() == "Choose";
            });
        }
    });
    return false;
}

function Check(btn, ti, text) {
    Swal.fire({
        title: ti,
        html: text,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        cancelButtonText: "No",
        confirmButtonText: 'Yes',
        customClass: {
            title: 'din-bold',
            content: 'din-bold',
            confirmButton: 'din-bold',
            cancelButton: 'din-bold'
        }
    }).then((result) => {
        if (result.isConfirmed) {
            window.location.href = btn.href;
        }
    });
    return false;
}

function CheckLink(btn, ti, text) {
    Swal.fire({
        title: ti,
        html: text,
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        cancelButtonText: "لا",
        confirmButtonText: 'نعم',
        customClass: {
            title: 'din-bold',
            content: 'din-bold',
            confirmButton: 'din-bold',
            cancelButton: 'din-bold'
        }
    }).then((result) => {
        debugger
        if (result.isConfirmed) {
            location.href = btn.href;
        }
    });
    return false;
}

function invokeAlert(title, text, icon, time) {
    Swal.fire({
        title: title,
        html: text,
        icon: icon,
        timer: time,
        timerProgressBar: true,
        customClass: {
            title: 'din-bold',
            content: 'din-bold'
        }
    });
}

function invokeAlertWithLink(title, text, icon, time, link, linkPrint) {
    invokeAlert(title, text, icon, time);
    //alert(1);
    //    let a = document.createElement('a');
    //a.target = '_blank';
    //a.href = linkPrint;
    //a.onclick = "window.open(this.href);return false;"
    //a.click();
    if (link != '') {
        setTimeout(function () { location.href = link; }, time);
    }
    //document.location.target = "_blank";
    //document.location.href = linkPrint;
}
