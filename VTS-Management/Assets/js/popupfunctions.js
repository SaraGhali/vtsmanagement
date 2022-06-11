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
function deleteCheck(btn) {
    return Check(btn, 'هل انت متأكد من الحذف؟', '');
}
function BlockCheck(btn) {
    return Check(btn, 'هل انت متأكد من حظر هذا المستخدم؟', '');
}
function SignUpf(reason)
{
    return invokeAlert("فشل تسجيل البيانات !", reason, 'warning', 5000);
}
function SignUpS(link) {
    return invokeAlertWithLink("مرحبا تم التسجيل بنجاح !", '', 'success', 4000, link);
}
function SignInF(reason) {
    return invokeAlert("فشل تسجيل الدخول !", reason, 'warning', 5000);
}
function ChangePasswordS(link) {
    return invokeAlertWithLink("تم تغيير كلمة المرور بنجاح!", '', 'success', 3000, link);
}
function ChangePasswordF() {
    return invokeAlert("لم يتم تغيير كلمة المرور !", '', 'warning', 3000);
}
function UnBlockCheck(btn) {
    return Check(btn, 'هل انت متأكد من رفع الحظر عن هذا المستخدم؟', '');
}
function VisibleUnit(btn) {
    return Check(btn, 'هل انت متأكد من عرض هذه الوحدة؟', '');
}

function PaidUnit(btn) {
    return Check(btn, 'هل انت متأكد ان هذة الوحدة غير متاحة؟', '');
}

function InVisibleTopic(btn) {
    return Check(btn, 'هل انت متأكد من جعل هذا الموضوع غير مرئى؟', '');
}
function CheckToDeactiveDonorPlan(btn) {
    return Check(btn, 'هل تريد الغاء التفعيل؟', 'الغاء التفعيل يلغي كل اسنادات الحالات');
}
function CopyTopic(btn) {
    return Check(btn, 'هل انت متأكد من نسخ هذا الموضوع؟', '');
}
function ShowComment(btn) {
    return Check(btn, 'هل انت متأكد من عرض هذا التعليق؟', '');
}

function HideComment(btn) {
    return Check(btn, 'هل انت متأكد من اخفاء هذا التعليق؟', '');
}


function deletedSR(reason) {
    return invokeAlert("تم الحذف بنجاح!", reason, 'success', 2000);
}
function deletedS() {
    return invokeAlert("تم الحذف بنجاح!", '', 'success', 2000);
}
function blockedS() {
    return invokeAlert("تم الحظر بنجاح!", '', 'success', 2000);
}
function UnblockedS() {
    return invokeAlert("تم رفع الحظر بنجاح!", '', 'success', 2000);
}
function deletedF(reson) {
    return invokeAlert("فشل الحذف!", reson, 'warning', 5000);
}
function CopyS() {
    return invokeAlert("تم النسخ بنجاح!", reason, 'success', 2000);
}

function savedS() {
    return invokeAlert("تم حفظ البيانات بنجاح!", '', 'success', 2000);
}
function DisplayCommentS() {
    return invokeAlert("تم عرض التعليق بنجاح!", '', 'success', 2000);
}

function HideCommentS() {
    return invokeAlert("تم اخفاء التعليق بنجاح!", '', 'success', 2000);
}

function savedSL(link) {
    return invokeAlertWithLink("تم حفظ البيانات بنجاح!", '', 'success', 2000, link);
}
function savedF(reson) {
    return invokeAlert("فشل حفظ البيانات!", reson, 'warning', 5000);
}


function selectwrong() {
    return invokeAlert('الرجاء التأكد من اختيار جميع البيانات بشكل صحيح !', '', 'warning', 5000);
}

function closeclick(id) {
    document.getElementById(id).click();
}
function Check(btn, ti, text) {
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
            console.log(btn.href);
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