import sqlite3
import os

# تأكد من وجود مجلد قاعدة البيانات
DB_FOLDER = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(DB_FOLDER, 'beiraq.db')

def create_statistics_table():
    """إنشاء جدول الإحصائيات في قاعدة البيانات"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # جدول الإحصائيات
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS statistics (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        key VARCHAR(50) NOT NULL UNIQUE,
        value INTEGER NOT NULL,
        title VARCHAR(100) NOT NULL,
        title_en VARCHAR(100) NOT NULL,
        display_order INTEGER DEFAULT 0
    )
    ''')
    
    # إضافة بعض الإحصائيات الافتراضية
    default_statistics = [
        ('years_experience', 15, 'سنوات الخبرة', 'Years of Experience', 1),
        ('completed_projects', 500, 'مشروع منجز', 'Completed Projects', 2),
        ('happy_clients', 300, 'عميل سعيد', 'Happy Clients', 3),
        ('professional_staff', 20, 'موظف محترف', 'Professional Staff', 4)
    ]
    
    for key, value, title, title_en, display_order in default_statistics:
        cursor.execute('''
        INSERT OR IGNORE INTO statistics (key, value, title, title_en, display_order) 
        VALUES (?, ?, ?, ?, ?)
        ''', (key, value, title, title_en, display_order))
    
    conn.commit()
    conn.close()

def get_all_statistics():
    """استرجاع جميع الإحصائيات"""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    cursor.execute('SELECT * FROM statistics ORDER BY display_order ASC')
    statistics = [dict(row) for row in cursor.fetchall()]
    
    conn.close()
    return statistics

def get_statistic(stat_id):
    """استرجاع إحصائية محددة بواسطة المعرف"""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    cursor.execute('SELECT * FROM statistics WHERE id = ?', (stat_id,))
    statistic = cursor.fetchone()
    
    conn.close()
    return dict(statistic) if statistic else None

def get_statistic_by_key(key):
    """استرجاع إحصائية محددة بواسطة المفتاح"""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    cursor.execute('SELECT * FROM statistics WHERE key = ?', (key,))
    statistic = cursor.fetchone()
    
    conn.close()
    return dict(statistic) if statistic else None

def update_statistic(stat_id, value=None, title=None, title_en=None, display_order=None):
    """تحديث إحصائية محددة"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # الحصول على البيانات الحالية
    cursor.execute('SELECT * FROM statistics WHERE id = ?', (stat_id,))
    current_data = cursor.fetchone()
    
    if not current_data:
        conn.close()
        return False
    
    # استخدام القيم الحالية إذا لم يتم تحديد قيم جديدة
    current_value, current_title, current_title_en, current_order = current_data[2:6]
    new_value = value if value is not None else current_value
    new_title = title if title is not None else current_title
    new_title_en = title_en if title_en is not None else current_title_en
    new_order = display_order if display_order is not None else current_order
    
    cursor.execute('''
    UPDATE statistics 
    SET value = ?, title = ?, title_en = ?, display_order = ? 
    WHERE id = ?
    ''', (new_value, new_title, new_title_en, new_order, stat_id))
    
    conn.commit()
    conn.close()
    
    return cursor.rowcount > 0

def update_statistic_by_key(key, value=None, title=None, title_en=None, display_order=None):
    """تحديث إحصائية محددة بواسطة المفتاح"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # الحصول على البيانات الحالية
    cursor.execute('SELECT * FROM statistics WHERE key = ?', (key,))
    current_data = cursor.fetchone()
    
    if not current_data:
        conn.close()
        return False
    
    # استخدام القيم الحالية إذا لم يتم تحديد قيم جديدة
    current_value, current_title, current_title_en, current_order = current_data[2:6]
    new_value = value if value is not None else current_value
    new_title = title if title is not None else current_title
    new_title_en = title_en if title_en is not None else current_title_en
    new_order = display_order if display_order is not None else current_order
    
    cursor.execute('''
    UPDATE statistics 
    SET value = ?, title = ?, title_en = ?, display_order = ? 
    WHERE key = ?
    ''', (new_value, new_title, new_title_en, new_order, key))
    
    conn.commit()
    conn.close()
    
    return cursor.rowcount > 0

def add_statistic(key, value, title, title_en, display_order=0):
    """إضافة إحصائية جديدة"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    try:
        cursor.execute('''
        INSERT INTO statistics (key, value, title, title_en, display_order) 
        VALUES (?, ?, ?, ?, ?)
        ''', (key, value, title, title_en, display_order))
        
        stat_id = cursor.lastrowid
        conn.commit()
        conn.close()
        
        return stat_id
    except sqlite3.IntegrityError:
        # المفتاح موجود بالفعل
        conn.close()
        return None

def delete_statistic(stat_id):
    """حذف إحصائية محددة"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    cursor.execute('DELETE FROM statistics WHERE id = ?', (stat_id,))
    
    conn.commit()
    conn.close()
    
    return cursor.rowcount > 0

def delete_statistic_by_key(key):
    """حذف إحصائية محددة بواسطة المفتاح"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    cursor.execute('DELETE FROM statistics WHERE key = ?', (key,))
    
    conn.commit()
    conn.close()
    
    return cursor.rowcount > 0

# إنشاء جدول الإحصائيات عند استيراد الملف
if __name__ == "__main__":
    create_statistics_table()
    print("تم إنشاء جدول الإحصائيات بنجاح!")
