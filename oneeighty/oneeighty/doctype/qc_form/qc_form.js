// Copyright (c) 2024, Ateeq and contributors
// For license information, please see license.txt

frappe.ui.form.on('QC Form', {
    yes: function (frm) {
        if (frm.doc.yes) {
            frm.set_value('no', 0);
        }
    },
    no: function (frm) {
        if (frm.doc.no) {
            frm.set_value('yes', 0);
            frm.set_value("urgent", 0);
        }
    },
    after_save: function (frm) {
        frm.set_value("barcode", frm.doc.name);
        frm.save();
    }
});


