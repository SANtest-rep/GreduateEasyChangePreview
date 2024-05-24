
from django.shortcuts import redirect
from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required

def redirect_to_accounts(request):
    return redirect('/app/')

def main(request):

    return render(request, 'main.html',{'section': 'main'})

@login_required
def is_authorized(request):
    return JsonResponse({'is_authorized': True})

def not_authorized(request):
    return JsonResponse({'is_authorized': False}, status=401)


import json
from django.http import JsonResponse, HttpResponse
from django.conf import settings
from telegram import Bot
import asyncio
import base64
import io

def send_message(request):
    if request.method == 'POST':
        # Получение данных из запроса
        data = json.loads(request.POST.get('data'))

        # Получение изображения из запроса
        image_data = request.POST.get('image')
        if not image_data:
            return JsonResponse({'success': False, 'error': 'No image data received.'})

        # Декодирование base64 изображения
        image_data = base64.b64decode(image_data.split(',')[1])
        
        # Дополнительная обработка данных и отправка в Telegram
        telegram_bot_token = settings.TELEGRAM_BOT_TOKEN
        chat_id = data.get('id')  # Используйте правильный ключ для получения chat_id
        message = ''   # Или любое другое сообщение, которое вы хотите отправить
        send_telegram_message(telegram_bot_token, chat_id, message, image_data)
        
        return JsonResponse({'success': True})
    else:
        return JsonResponse({'success': False, 'error': 'Only POST requests are allowed.'})

def send_telegram_message(bot_token, chat_id, message, image_data):
    async def _send_message():
        bot = Bot(token=bot_token)
        await bot.send_photo(chat_id=chat_id, photo=image_data, caption=message)
    
    asyncio.run(_send_message())