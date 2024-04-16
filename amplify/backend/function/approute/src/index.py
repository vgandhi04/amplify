import json
from chalice import Chalice
# import AppSyncHelper
# from gql import gql, Client
import boto3
import os
from decimal import Decimal
from boto3.dynamodb.conditions import Key

dynamodb = boto3.resource('dynamodb')
env = os.environ.get('ENV')
aws_region = os.environ.get('REGION')

TABLE_NAME = "Movie-kkjslvsy7vcj3pkagm5x5jsfsa-qa"
print("TABLE_NAME ", TABLE_NAME)
table = dynamodb.Table(TABLE_NAME)

app = Chalice(app_name='approute')

@app.route('/search', methods=["POST"], cors=True)
def test12():
    print("Hello")
    return "success"


@app.route('/search', methods=["GET"], cors=True, content_types=['application/json'])
def test34():
    print("Hii")
    new_data = requested_data[:200]
    items_found = []
    batch_size = 100
    total_data = []
    try:
        for i in range(0, len(new_data), batch_size):
            batch_data = new_data[i:i + batch_size]
            keys_to_get = [{'year': int(item['year']), 'title': item['title']} for item in batch_data]
            
            print("keys_to_get ", keys_to_get)
        
            response = dynamodb.batch_get_item(
                RequestItems={
                    TABLE_NAME:{
                        'Keys': keys_to_get
                    }
                }
            )
            print("response ", response)
            items_found = response.get('Responses', {}).get(TABLE_NAME, [])
            print("items_found ", items_found)
            total_data.extend(items_found)
            print("total_data ", total_data)
        
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Headers': '*',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
            },
            'body': json.dumps(f'Hello from your new Amplify Python lambda! - lenth - {len(total_data)} - found')
        }
    
    except Exception as e:
        print(f"Error adding data: {e}")
        return {
            'statusCode': 500,
            'body': json.dumps('An error occurred: {}'.format(e))
        }



# def handler(event, context):
#   print('received event:')
#   print(event)
  
#   return {
#       'statusCode': 200,
#       'headers': {
#           'Access-Control-Allow-Headers': '*',
#           'Access-Control-Allow-Origin': '*',
#           'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
#       },
#       'body': json.dumps('Hello from your new Amplify Python lambda!')
#   }