from rest_framework import serializers
from ..models import LastLaunch

class LastLaunchSerializer(serializers.ModelSerializer):
    class Meta:
        model = LastLaunch
        fields = ('arq_return', )