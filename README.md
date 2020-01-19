
# NodeJS ExpressJS Restful API for sending SMS in India using Fast2SMS

## Quick start

```
$ npm install
```

This will install all the project dependencies


# Details

```
YOUR_API_KEY = FIND THIS API KEY INSIDE https://www.fast2sms.com/dashboard/dev-api 
TARGET_PHONE_NUMBER = 'Target numbers separated by comma, e.g. 8962239013,7773854335'

```

# Optional settings

You can also add these to options variable
```
sender_id -     A custom name for SMS sender
language  -     english / unicode (Unicode supports other languages such as Hindi) 
route     -     qt: Quick transactional
                q: Promotional  
                t: Transactional
variable  -     For 5 characters: 5 = {#AA#} 
                For 10 characters: 10 ={#BB#} 
                For 15 characters: 15 ={#CC#} 
                For 20 characters: 20 ={#DD#} 
                For 25 characters: 25 ={#EE#} 
                For 30 characters: 30 ={#FF#}
variable_value -Your value for the template variable
message   -     If you are using templates message = template_id 
```
You may find your template_id here https://www.fast2sms.com/dev/quick-templates?authorization=YOUR_AUTHORIZATION_KEY