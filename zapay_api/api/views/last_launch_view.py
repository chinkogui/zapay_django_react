from rest_framework.views import APIView
from ..services import last_launch_service
from ..serializers import last_launch_serializer
from rest_framework.response import Response
from rest_framework import status

class LastLaunch(APIView):
    def get(self, request, format=None):
        next_launch = last_launch_service.listar_next_launch()
        serializer = last_launch_serializer.NextLaunchSerializer()
        return Response(serializer.data, status=status.HTTP_200_OK)


