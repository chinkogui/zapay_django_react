from rest_framework import serializers
from ..models import UpcomingLaunch

class UpcomingLaunchSerializer(serializers.ModelSerializer):
    class Meta:
        model = UpcomingLaunch
        fields = ('arq_return', )