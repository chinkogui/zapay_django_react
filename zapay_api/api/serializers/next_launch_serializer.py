from rest_framework import serializers
from ..models import NextLaunch

class NextLaunchSerializer(serializers.ModelSerializer):
    class Meta:
        model = NextLaunch
        fields = ('arq_return', )