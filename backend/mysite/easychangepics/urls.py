from allauth.account.views import LogoutView
from django.urls import path, include
from . import views
from easychangepics.views import redirect_to_accounts

urlpatterns = [
    path('accounts/', include('allauth.urls')),
    path('accounts/is_authorized/', views.is_authorized, name='is_authorized'),
    path('accounts/logout/', LogoutView.as_view(), name='logout'),
    path('accounts/not_authorized/', views.not_authorized, name='not_authorized'),
    # path('accounts/profile/', views.profile, name='profile'),
    path('accounts/send', views.send_message, name='send_message'),
    
    path('app/', views.main, name='main'),
    path('', redirect_to_accounts),
]