from rest_framework import serializers
from ..models import PastLaunch

class PastLaunchSerializer(serializers.ModelSerializer):
    class Meta:
        model = PastLaunch
        fields = ('arq_return', )