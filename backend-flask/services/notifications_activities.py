from datetime import datetime, timedelta, timezone
from opentelemetry import trace

from lib.db import db

class NotificationsActivities:
  def run(cognito_user_id=None):
    # now = datetime.now(timezone.utc).astimezone()
    # results = [{
    #   'uuid': '0a2c6b5e-1db1-4f4a-88b9-0e83efbc6984',
    #   'handle':  'ohahuru',
    #   'display_name':  'Hillary Ugwu',
    #   'message': 'I am looking for my banana!',
    #   'created_at': (now - timedelta(days=2)).isoformat(),
    #   'expires_at': (now + timedelta(days=5)).isoformat(),
    #   'likes_count': 5,
    #   'replies_count': 1,
    #   'reposts_count': 0,
    #   'replies': [{
    #     'uuid': '26e12864-1c26-5c3a-9658-97a10f8fea67',
    #     'reply_to_activity_uuid': '68f126b0-1ceb-4a33-88be-d90fa7109eee',
    #     'handle':  'Worf',
    #     'message': 'This post has no honor!',
    #     'likes_count': 0,
    #     'replies_count': 0,
    #     'reposts_count': 0,
    #     'created_at': (now - timedelta(days=2)).isoformat()
    #   }],
    # }
    # ]
    sql = db.template('activities','notification')
    results = db.query_array_json(sql)
    return results
