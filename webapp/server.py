#!/usr/bin/env python
import asyncio
import websockets
from docx import Document
import logging
import json

from docx.shared import Inches, Pt


logging.basicConfig(level=logging.INFO)
        
def log_message(message):
    logging.info(f'Message:{message}')        
    
async def recv_user_msg(websocket):
    try:
        while True:
            recv_text = await websocket.recv()
            log_message(f'recv_text:, {recv_text}')  
            await createFile(websocket, recv_text)
    except Exception as e:
        log_message(f'Exception {e}')
        
async def createFile(websocket, text):
    try:
        parsed_json = json.loads(text)
        log_message(parsed_json)
        document = Document()
        font = document.styles['Normal'].font
        font.name = parsed_json['fontStyle']
        font.size = Pt(int(parsed_json['fontSize']))
        document.add_paragraph(parsed_json['text'])
        document.save("document.docx")
        await websocket.send('r')
        log_message('ready')
    except Exception as e:
        log_message(f'Exception {e}')


if __name__ == '__main__':
    try:
        asyncio.get_event_loop().run_until_complete(websockets.serve(recv_user_msg, '127.0.0.1', 5678))
        asyncio.get_event_loop().run_forever()
    except Exception as e:
        log_message(f'Exception {e}')