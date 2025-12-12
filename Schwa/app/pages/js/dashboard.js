// Gestion du changement de photo de profil
document.addEventListener('DOMContentLoaded', function() {
    const photoUpload = document.getElementById('photoUpload');
    const profileImage = document.getElementById('profileImage');

    if (photoUpload) {
        photoUpload.addEventListener('change', function(e) {
            const file = e.target.files[0];
            
            if (file) {
                
                if (!file.type.startsWith('image/')) {
                    alert('Veuillez sélectionner une image valide');
                    return;
                }

                
                if (file.size > 5 * 1024 * 1024) {
                    alert('L\'image est trop grande. Maximum 5MB.');
                    return;
                }

                
                const reader = new FileReader();

                reader.onload = function(event) {
                    
                    profileImage.src = event.target.result;

                    
                    profileImage.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        profileImage.style.transform = 'scale(1)';
                    }, 200);

                    
                    uploadProfilePhoto(file);
                };

                reader.readAsDataURL(file);
            }
        });
    }

    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);


    document.querySelectorAll('.lessons-section, .achievements-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'all 0.6s ease';
        observer.observe(section);
    });
});


function uploadProfilePhoto(file) {
    const formData = new FormData();
    formData.append('file', file);

    const loadingIndicator = document.createElement('div');
    loadingIndicator.className = 'upload-loading';
    loadingIndicator.innerHTML = '<div class="spinner"></div>';
    document.querySelector('.profile-photo-wrapper').appendChild(loadingIndicator);

    
    fetch('updatePDP.php', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        
        return response.text().then(text => {
            console.log('Réponse brute du serveur:', text);
            try {
                return JSON.parse(text);
            } catch(e) {
                throw new Error('Réponse invalide: ' + text.substring(0, 100));
            }
        });
    })
    .then(data => {
        
        loadingIndicator.remove();

        if (data.success) {
            
            showNotification('Photo de profil mise à jour avec succès!', 'success');
            
            
            if (data.photoPath) {
                document.getElementById('profileImage').src = data.photoPath;
            }
        } else {
            showNotification(data.message || 'Erreur lors de la mise à jour de la photo', 'error');
        }
    })
    .catch(error => {
        loadingIndicator.remove();
        console.error('Erreur:', error);
        showNotification('Erreur de connexion au serveur', 'error');
    });
}


function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✓' : '✕'}</span>
            <span class="notification-message">${message}</span>
        </div>
    `;

    document.body.appendChild(notification);

    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}


window.addEventListener('load', function() {
    const progressBars = document.querySelectorAll('.progress-fill, .lesson-progress-fill');
    
    progressBars.forEach(bar => {
        const targetWidth = bar.style.width;
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = targetWidth;
        }, 300);
    });
});


document.querySelectorAll('.lesson-card-dashboard').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.borderLeftWidth = '6px';
    });

    card.addEventListener('mouseleave', function() {
        this.style.borderLeftWidth = '4px';
    });
});


document.querySelectorAll('.badge-item').forEach(badge => {
    badge.addEventListener('click', function() {
        if (this.classList.contains('locked')) {
            const badgeName = this.querySelector('p').textContent;
            showNotification(`Badge "${badgeName}" non débloqué. Continuez vos efforts!`, 'info');
        } else {
            const badgeName = this.querySelector('p').textContent;
            showNotification(`Badge "${badgeName}" obtenu!`, 'success');
        }
    });
});


const notificationStyles = `
    .notification {
        position: fixed;
        top: 20px;
        right: 20px;
        background: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        z-index: 1000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
    }

    .notification.show {
        transform: translateX(0);
    }

    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .notification-icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 14px;
    }

    .notification-success .notification-icon {
        background: #10b981;
        color: white;
    }

    .notification-error .notification-icon {
        background: #ef4444;
        color: white;
    }

    .notification-info .notification-icon {
        background: #004aad;
        color: white;
    }

    .notification-message {
        color: #222;
        font-weight: 600;
    }

    .upload-loading {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .spinner {
        width: 40px;
        height: 40px;
        border: 4px solid rgba(255, 255, 255, 0.3);
        border-top-color: white;
        border-radius: 50%;
        animation: spin 0.8s linear infinite;
    }

    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`;

const styleElement = document.createElement('style');
styleElement.textContent = notificationStyles;
document.head.appendChild(styleElement);