from django.db import models

# Create your models here.

class NextLaunch(models.Model):
    arq_return = models.TextField()

    def __str__(self):
        return self.arq_return

class LastLaunch(models.Model):
    arq_return = models.TextField()

    def __str__(self):
        return self.arq_return

class PastLaunch(models.Model):
    arq_return = models.TextField()

    def __str__(self):
        return self.arq_return

class UpcomingLaunch(models.Model):
    arq_return = models.TextField()

    def __str__(self):
        return self.arq_return