from flask import Flask, render_template, request, redirect, url_for, flash, jsonify, session
import os
import sys
import json
from werkzeug.utils import secure_filename
from datetime import datetime

# إضافة المجلد الحالي إلى مسار النظام
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

# استيراد وحدات قاعدة البيانات
import database
import statistics

app = Flask(__name__, template_folder='../admin/templates', static_folder='../admin/static')
app.secret_key = 'beiraq_secret_key_2025'  # مفتاح سري للجلسات والرسائل

# تكوين مجلد التحميل
UPLOAD_FOLDER = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), 'images')
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

# التحقق من امتدادات الملفات المسموح بها
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# التحقق من تسجيل الدخول
def login_required(f):
    def decorated_function(*args, **kwargs):
        if 'user_id' not in session:
            flash('يرجى تسجيل الدخول أولاً', 'error')
            return redirect(url_for('login'))
        return f(*args, **kwargs)
    decorated_function.__name__ = f.__name__
    return decorated_function

# الصفحة الرئيسية للوحة التحكم
@app.route('/admin')
@login_required
def admin_dashboard():
    return render_template('dashboard.html')

# صفحة تسجيل الدخول
@app.route('/admin/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form.get('username')
        password = request.form.get('password')
        
        # التحقق من بيانات المستخدم (يجب تحسين هذا في الإنتاج باستخدام تشفير كلمة المرور)
        if username == 'admin' and password == 'admin123':
            session['user_id'] = 1
            session['username'] = username
            flash('تم تسجيل الدخول بنجاح', 'success')
            return redirect(url_for('admin_dashboard'))
        else:
            flash('اسم المستخدم أو كلمة المرور غير صحيحة', 'error')
    
    return render_template('login.html')

# تسجيل الخروج
@app.route('/admin/logout')
def logout():
    session.clear()
    flash('تم تسجيل الخروج بنجاح', 'success')
    return redirect(url_for('login'))

# إدارة الإحصائيات
@app.route('/admin/statistics')
@login_required
def manage_statistics():
    stats = statistics.get_all_statistics()
    return render_template('statistics.html', statistics=stats)

# تحديث إحصائية
@app.route('/admin/statistics/update/<int:stat_id>', methods=['POST'])
@login_required
def update_statistic(stat_id):
    value = request.form.get('value', type=int)
    title = request.form.get('title')
    title_en = request.form.get('title_en')
    display_order = request.form.get('display_order', type=int)
    
    if statistics.update_statistic(stat_id, value, title, title_en, display_order):
        flash('تم تحديث الإحصائية بنجاح', 'success')
    else:
        flash('حدث خطأ أثناء تحديث الإحصائية', 'error')
    
    return redirect(url_for('manage_statistics'))

# إضافة إحصائية جديدة
@app.route('/admin/statistics/add', methods=['POST'])
@login_required
def add_statistic():
    key = request.form.get('key')
    value = request.form.get('value', type=int)
    title = request.form.get('title')
    title_en = request.form.get('title_en')
    display_order = request.form.get('display_order', type=int, default=0)
    
    if not key or not title or not title_en or value is None:
        flash('جميع الحقول مطلوبة', 'error')
        return redirect(url_for('manage_statistics'))
    
    stat_id = statistics.add_statistic(key, value, title, title_en, display_order)
    if stat_id:
        flash('تمت إضافة الإحصائية بنجاح', 'success')
    else:
        flash('حدث خطأ أثناء إضافة الإحصائية، قد يكون المفتاح موجوداً بالفعل', 'error')
    
    return redirect(url_for('manage_statistics'))

# حذف إحصائية
@app.route('/admin/statistics/delete/<int:stat_id>', methods=['POST'])
@login_required
def delete_statistic(stat_id):
    if statistics.delete_statistic(stat_id):
        flash('تم حذف الإحصائية بنجاح', 'success')
    else:
        flash('حدث خطأ أثناء حذف الإحصائية', 'error')
    
    return redirect(url_for('manage_statistics'))

# واجهة برمجة التطبيقات للإحصائيات
@app.route('/api/statistics', methods=['GET'])
def api_get_statistics():
    stats = statistics.get_all_statistics()
    return jsonify(stats)

# إدارة رسائل التواصل
@app.route('/admin/messages')
@login_required
def manage_messages():
    messages = database.get_all_contact_messages()
    return render_template('messages.html', messages=messages)

# عرض رسالة تواصل
@app.route('/admin/messages/<int:message_id>')
@login_required
def view_message(message_id):
    message = database.get_contact_message(message_id)
    if not message:
        flash('الرسالة غير موجودة', 'error')
        return redirect(url_for('manage_messages'))
    
    return render_template('view_message.html', message=message)

# تحديث حالة رسالة
@app.route('/admin/messages/update_status/<int:message_id>', methods=['POST'])
@login_required
def update_message_status(message_id):
    status = request.form.get('status')
    if database.update_message_status(message_id, status):
        flash('تم تحديث حالة الرسالة بنجاح', 'success')
    else:
        flash('حدث خطأ أثناء تحديث حالة الرسالة', 'error')
    
    return redirect(url_for('view_message', message_id=message_id))

# حذف رسالة
@app.route('/admin/messages/delete/<int:message_id>', methods=['POST'])
@login_required
def delete_message(message_id):
    if database.delete_message(message_id):
        flash('تم حذف الرسالة بنجاح', 'success')
        return redirect(url_for('manage_messages'))
    else:
        flash('حدث خطأ أثناء حذف الرسالة', 'error')
        return redirect(url_for('view_message', message_id=message_id))

# استقبال رسائل التواصل من النموذج
@app.route('/api/contact', methods=['POST'])
def api_contact():
    name = request.form.get('name')
    email = request.form.get('email')
    phone = request.form.get('phone')
    message = request.form.get('message')
    
    if not name or not email or not phone or not message:
        return jsonify({'success': False, 'message': 'جميع الحقول مطلوبة'})
    
    message_id = database.save_contact_message(name, email, phone, message)
    if message_id:
        return jsonify({'success': True, 'message': 'تم إرسال رسالتك بنجاح'})
    else:
        return jsonify({'success': False, 'message': 'حدث خطأ أثناء إرسال الرسالة'})

# تهيئة قاعدة البيانات
@app.before_first_request
def initialize_database():
    database.create_tables()
    statistics.create_statistics_table()

if __name__ == '__main__':
    # تأكد من وجود المجلدات اللازمة
    os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
    
    # تشغيل التطبيق
    app.run(debug=True, host='0.0.0.0', port=5000)
