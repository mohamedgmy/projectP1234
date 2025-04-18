import sqlite3
import os
import datetime

# تأكد من وجود مجلد قاعدة البيانات
DB_FOLDER = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(DB_FOLDER, 'beiraq.db')

def create_tables():
    """إنشاء جداول قاعدة البيانات"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # جدول رسائل التواصل
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS contact_messages (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        phone VARCHAR(20) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status VARCHAR(20) DEFAULT 'جديدة'
    )
    ''')
    
    # جدول المستخدمين للإدارة
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username VARCHAR(50) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        email VARCHAR(100) NOT NULL,
        role VARCHAR(20) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        last_login TIMESTAMP
    )
    ''')
    
    # جدول الخدمات
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS services (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title VARCHAR(100) NOT NULL,
        title_en VARCHAR(100) NOT NULL,
        description TEXT NOT NULL,
        description_en TEXT NOT NULL,
        image VARCHAR(255),
        order_num INTEGER DEFAULT 0
    )
    ''')
    
    # جدول معرض الأعمال
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS gallery (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title VARCHAR(100) NOT NULL,
        title_en VARCHAR(100) NOT NULL,
        description TEXT,
        description_en TEXT,
        image_path VARCHAR(255) NOT NULL,
        service_id INTEGER,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (service_id) REFERENCES services (id)
    )
    ''')
    
    # جدول آراء العملاء
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS testimonials (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        client_name VARCHAR(100) NOT NULL,
        client_name_en VARCHAR(100) NOT NULL,
        client_position VARCHAR(100),
        client_position_en VARCHAR(100),
        content TEXT NOT NULL,
        content_en TEXT NOT NULL,
        rating INTEGER DEFAULT 5,
        is_active BOOLEAN DEFAULT 1
    )
    ''')
    
    # جدول الإعدادات العامة
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS settings (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        key VARCHAR(50) NOT NULL UNIQUE,
        value TEXT,
        value_en TEXT
    )
    ''')
    
    # إضافة بعض الإعدادات الافتراضية
    default_settings = [
        ('site_title', 'مطبعة بيرق للدعاية والإعلان', 'Beiraq Printing Press'),
        ('site_description', 'خدمات طباعة احترافية وعصرية بأعلى جودة وأفضل الأسعار', 'Professional printing services with high quality and best prices'),
        ('contact_email', 'info@beiraq.com', 'info@beiraq.com'),
        ('contact_phone', '0538773161', '0538773161'),
        ('contact_whatsapp', '966536338630', '966536338630'),
        ('contact_address', 'القصيم، المملكة العربية السعودية', 'Qassim, Saudi Arabia'),
        ('profile_pdf', '', '')
    ]
    
    for key, value, value_en in default_settings:
        cursor.execute('INSERT OR IGNORE INTO settings (key, value, value_en) VALUES (?, ?, ?)', (key, value, value_en))
    
    # إضافة مستخدم افتراضي للإدارة (اسم المستخدم: admin، كلمة المرور: admin123)
    # في الإنتاج يجب تغيير كلمة المرور وتشفيرها بشكل آمن
    cursor.execute('INSERT OR IGNORE INTO users (username, password, email, role) VALUES (?, ?, ?, ?)', 
                  ('admin', 'admin123', 'admin@beiraq.com', 'مدير'))
    
    conn.commit()
    conn.close()

def save_contact_message(name, email, phone, message):
    """حفظ رسالة تواصل جديدة في قاعدة البيانات"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    cursor.execute('''
    INSERT INTO contact_messages (name, email, phone, message)
    VALUES (?, ?, ?, ?)
    ''', (name, email, phone, message))
    
    message_id = cursor.lastrowid
    conn.commit()
    conn.close()
    
    return message_id

def get_all_contact_messages():
    """استرجاع جميع رسائل التواصل"""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    cursor.execute('SELECT * FROM contact_messages ORDER BY created_at DESC')
    messages = [dict(row) for row in cursor.fetchall()]
    
    conn.close()
    return messages

def get_contact_message(message_id):
    """استرجاع رسالة تواصل محددة"""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    cursor.execute('SELECT * FROM contact_messages WHERE id = ?', (message_id,))
    message = cursor.fetchone()
    
    conn.close()
    return dict(message) if message else None

def update_message_status(message_id, status):
    """تحديث حالة رسالة تواصل"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    cursor.execute('UPDATE contact_messages SET status = ? WHERE id = ?', (status, message_id))
    
    conn.commit()
    conn.close()
    
    return cursor.rowcount > 0

def delete_message(message_id):
    """حذف رسالة تواصل"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    cursor.execute('DELETE FROM contact_messages WHERE id = ?', (message_id,))
    
    conn.commit()
    conn.close()
    
    return cursor.rowcount > 0

# إنشاء جداول قاعدة البيانات عند استيراد الملف
if __name__ == "__main__":
    create_tables()
    print("تم إنشاء قاعدة البيانات بنجاح!")
