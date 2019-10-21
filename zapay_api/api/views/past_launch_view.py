from rest_framework.views import APIView
from ..services import past_launch_service
from ..serializers import past_launch_serializer
from rest_framework.response import Response
from rest_framework import status

class PastLaunch(APIView):
    def get(self, request, format=None):
        next_launch = past_launch_service.listar_next_launch()
        serializer = past_launch_serializer.NextLaunchSerializer()
        return Response(serializer.data, status=status.HTTP_200_OK)


