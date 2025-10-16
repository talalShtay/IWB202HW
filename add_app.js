
// بيانات التطبيقات الافتراضية
let applications = [
    {
        name: "ChatGPT",
        company: "OpenAI",
        field: "Education",
        free: "نعم",
        website: "https://chat.openai.com",
        description: "مساعد ذكي للدردشة والإجابة على الأسئلة",
        logo: "chatgpt-logo.png"
    },
    {
        name: "Midjourney",
        company: "Midjourney Inc",
        field: "Design",
        free: "لا",
        website: "https://www.midjourney.com",
        description: "تطبيق لإنشاء الصور باستخدام الذكاء الاصطناعي",
        logo: "midjourney-logo.png"
    },
    {
        name: "Grammarly",
        company: "Grammarly Inc",
        field: "Writing",
        free: "نعم",
        website: "https://www.grammarly.com",
        description: "مساعد كتابة يحسن الجمل ويصحح الأخطاء",
        logo: "grammarly-logo.png"
    },
    {
        name: "DALL-E",
        company: "OpenAI",
        field: "Design",
        free: "لا",
        website: "https://openai.com/dall-e",
        description: "منشئ صور من النصوص باستخدام الذكاء الاصطناعي",
        logo: "dalle-logo.png"
    },
    {
        name: "Google Assistant",
        company: "Google",
        field: "Productivity",
        free: "نعم",
        website: "https://assistant.google.com",
        description: "مساعد شخصي ذكي للمساعدة في المهام اليومية",
        logo: "google-assistant-logo.png"
    }
];


// إعادة تعيين النموذج
function resetForm() {
    $('#appForm')[0].reset();
    $('.error').hide();
}

// التحقق من صحة النموذج
function validateForm() {
    let isValid = true;
    
    // مسح رسائل الخطأ السابقة
    $('.error').hide();

    // التحقق من اسم التطبيق (أحرف إنجليزية فقط بدون مسافات)
    const appName = $('#appName').val();
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(appName)) {
        $('#appNameError').text('اسم التطبيق يجب أن يحتوي على أحرف إنجليزية فقط بدون مسافات').show();
        isValid = false;
    }

    // التحقق من اسم الشركة (أحرف إنجليزية فقط)
    const company = $('#company').val();
    if (!nameRegex.test(company)) {
        $('#companyError').text('اسم الشركة يجب أن يحتوي على أحرف إنجليزية فقط').show();
        isValid = false;
    }

    // التحقق من الموقع الإلكتروني
    const website = $('#website').val();
    const urlRegex = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    if (!urlRegex.test(website)) {
        $('#websiteError').text('يرجى إدخال عنوان موقع إلكتروني صحيح').show();
        isValid = false;
    }

    // التحقق من مجال الاستخدام
    const field = $('#field').val();
    if (!field) {
        $('#fieldError').text('يرجى اختيار مجال الاستخدام').show();
        isValid = false;
    }

    // التحقق من الوصف
    const description = $('#description').val();
    if (description.length < 10) {
        $('#descriptionError').text('الوصف يجب أن يكون على الأقل 10 أحرف').show();
        isValid = false;
    }

    return isValid;
}

// معالجة إرسال النموذج
function handleFormSubmit() {
    if (validateForm()) {
        const newApp = {
            name: $('#appName').val(),
            company: $('#company').val(),
            website: $('#website').val(),
            free: $('#isFree').val(),
            field: $('#field').val(),
            description: $('#description').val(),
            logo: 'default-logo.png'
        };

        applications.push(newApp);
        localStorage.setItem('aiApplications', JSON.stringify(applications));
        
        // الانتقال إلى صفحة التطبيقات
        window.location.href = 'apps.html';
    }
}
// إعداد معالجات الأحداث
function setupEventHandlers() {
    // معالجة نموذج إضافة تطبيق
    $('#send').on('click', function(e) {
        console.log("ASd")
        handleFormSubmit();
    });
    
    // // معالجة زر الإعادة
    // $('#resetBtn').on('click', function() {
    //     console.log("asd")
    //     resetForm();
    // });
}

$(document).ready(function() {
    setupEventHandlers()

});