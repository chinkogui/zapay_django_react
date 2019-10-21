from django.urls import path, include
from .views import next_launch_view
from .views import last_launch_view
from .views import past_launch_view
from .views import upcoming_launch_view

urlpatterns = [
    path('next_launch/', include(next_launch_view.NextLaunch.as_view()), name='next_launch'),
    path('last_launch/', include(last_launch_view.LastLaunch.as_view()), name='last_launch'),
    path('past_launch/', include(past_launch_view.PastLaunch.as_view()), name='last_launch'),
    path('last_launch/', include(upcoming_launch_view.UpcomingLaunch.as_view()), name='last_launch'),
]