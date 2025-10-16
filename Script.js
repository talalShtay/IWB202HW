
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

// تهيئة التطبيقات عند تحميل الصفحة
$(document).ready(function() {
    initializeApplications();
    setupEventHandlers();
});

// تهيئة قائمة التطبيقات
function initializeApplications() {
    const storedApps = localStorage.getItem('aiApplications');

    if (storedApps) {
        applications = JSON.parse(storedApps);
    }
    displayApplications();
}


// عرض التطبيقات في الجدول
function displayApplications() {
    const tbody = $('#appsTable tbody');
    tbody.empty();

    applications.forEach((app, index) => {
        const row = `
            <tr>
                <td>${app.name}</td>
                <td>${app.company}</td>
                <td>${app.field}</td>
                <td>${app.free}</td>
                <td>
                    <input type="checkbox" class="details-checkbox" data-index="${index}">
                </td>
            </tr>
            <tr class="details-row" id="details-${index}" style="display: none;">
                <td colspan="5">
                    <div class="app-details">
                        <div class="details-grid">
                            <div class="app-logo">LOGO</div>
                            <div>
                                <h3>${app.name}</h3>
                                <p><strong>الشركة:</strong> ${app.company}</p>
                                <p><strong>مجال الاستخدام:</strong> ${app.field}</p>
                                <p><strong>مجاني:</strong> ${app.free}</p>
                                <p><strong>الموقع:</strong> <a href="${app.website}" target="_blank">${app.website}</a></p>
                                <p><strong>الوصف:</strong> ${app.description}</p>
                            </div>
                        </div>
                    </div>
                </td>
            </tr>
        `;
        tbody.append(row);
    });

    // إضافة معالج الأحداث لصناديق التفاصيل
    $('.details-checkbox').on('change', function(event) {
        const index = $(this).data('index');
        const detailsRow = $('#details-' + index);
        
        if ($(this).is(':checked')) {
            detailsRow.show();
            detailsRow.style.display = "block";
        } else {
            detailsRow.hide();
        }
        // console.log(event.target.closest('tr'))
        // event.target.closest('tr').style.cssText += 'height:200px'
    });
}



// // وظيفة للتنقل بين الصفحات
// function navigateTo(page) {
//     window.location.href = page;
// }
