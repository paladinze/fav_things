from django.db import models

class Movie(models.Model):
  title = models.CharField(max_length=120)
  summary = models.TextField()
  image = models.CharField(max_length=120)

  def _str_(self):
    return self.title
