// __dirname הוא משתנה שנותן את הנתיב המוחלט עד אותו קובץ שפתוח כרגע

// path.join () מחברת את כל מקטעי הנתיבים שצוין לנתיב אחד

// השרת מוריד את הקבצים : style.css, img, app.js

// בעזרת שורות הקוד app.use( express.static(publicPath));, const publicPath = path.join(__dirname, "..", "public");

// ע"י שינוי המילה public ל public1 בשורה const publicPath = path.join(__dirname, "..", "public");

// שינוי השמות מספיק כדי שזה ייעבוד