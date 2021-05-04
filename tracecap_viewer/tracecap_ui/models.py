from django.db import models
from django.contrib.auth.models import User

from nanoid import generate
import string

class Project(models.Model):
    provider = models.CharField(max_length=128, null=False)
    name = models.CharField(max_length=128, null=False)

    @property
    def display_name(self):
        return '{}/{}'.format(self.provider, self.name)

    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['provider', 'name'], name='unique_provider_and_name'),
        ]

def get_new_url_id():
    new_id = generate(string.ascii_lowercase + string.digits, 16)
    return new_id[0:4] + '-' + new_id[4:8] + '-' + new_id[8:12] + '-' + new_id[12:16]

# Create your models here.
class TraceCapture(models.Model):
    slug = models.CharField(max_length=32, db_index=True, unique=True, default=get_new_url_id)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    project = models.ForeignKey(Project, on_delete=models.SET_NULL, null=True)
    filename = models.CharField(max_length=64)
