package com.react_feat;

// package com.myproject.mysmsmodule;

import android.content.ContentResolver;
import android.content.Context;
import android.database.Cursor;
import android.net.Uri;
import android.provider.Telephony;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class MySmsModuleModule extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;

    public MySmsModuleModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "MySmsModule";
    }

    @ReactMethod
    public void getSMSMessages(Callback successCallback, Callback errorCallback) {
        try {
            ContentResolver contentResolver = this.reactContext.getContentResolver();
            Uri smsUri = Uri.parse("content://sms/inbox");
            Cursor cursor = contentResolver.query(smsUri, null, null, null, null);

            if (cursor != null && cursor.moveToFirst()) {
                do {
                    String messageBody = cursor.getString(cursor.getColumnIndex("body"));
                    // You can access other message details as needed

                    // Send the message details to JavaScript
                    successCallback.invoke(messageBody);
                } while (cursor.moveToNext());
            } else {
                errorCallback.invoke("No messages found.");
            }
        } catch (Exception e) {
            errorCallback.invoke(e.getMessage());
        }
    }
}
