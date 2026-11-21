import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
    title: string;
    subtitle: string;
    description: string[];
    tech: string[];
    icon: string;
    link?: string;
}

@Component({
    selector: 'app-projects',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.css']
})
export class ProjectsComponent {

    projects: Project[] = [
        {
            title: 'Play–Pause–Post (PPP)',
            subtitle: 'AI sports replay & analytics platform',
            description: [
                'Production AI platform for badminton and racket-sport analytics, replay generation and automated officiating.',
                'CV pipelines for shuttle/ball and player tracking, pose estimation, court mapping, bounce detection and trajectory analysis.',
                'Person Re-ID, rally detection, scoring logic and automated line calling.',
                'Multi-venue streaming to a central server with S3 storage; shot speed (km/h) from court calibration.',
                'GPU acceleration and quantization for Android and smartwatch apps.'
            ],
            tech: ['Object Tracking', 'Pose Estimation', 'Re-ID', 'Quantization', 'S3'],
            icon: 'fa-table-tennis',
            link: 'https://play.google.com/store/apps/details?id=com.vtpl.volley&hl=en'
        },
        {
            title: 'CCTV Vision',
            subtitle: 'Video surveillance & workforce analytics',
            description: [
                'Scalable multi-camera AI system for identity tracking, security, attendance and workforce analytics.',
                'Face recognition, person detection, multi-object tracking and Re-ID for cross-camera identity.',
                'Real-time multi-stream ingestion with RTSP, GStreamer and GPU inference.',
                'ANPR for vehicle entry/exit logging; attendance, headcount, dwell-time and heatmap analytics.'
            ],
            tech: ['RTSP', 'GStreamer', 'Face Recognition', 'ANPR', 'GPU Inference'],
            icon: 'fa-video'
        },
        {
            title: 'RetailVision AI',
            subtitle: 'Retail computer vision analytics',
            description: [
                'Enterprise video analytics for store operations, workforce productivity and customer behaviour.',
                'Queue management, cashier monitoring and customer-staff interaction analytics using tracking, Re-ID and pose analysis.',
                'Real-time occupancy counting with line-crossing and live modes.',
                'Shelf monitoring and crowd-density insights via dashboards, alerts and heatmaps.'
            ],
            tech: ['Tracking', 'Re-ID', 'Pose Analysis', 'Heatmaps'],
            icon: 'fa-store'
        },
        {
            title: 'V-Commute',
            subtitle: 'Enterprise mobility & attendance',
            description: [
                'Android platform for employee commute tracking, geofenced attendance and travel allowance.',
                'Geofencing, GPS tracking and attendance workflows.',
                'Face authentication with anti-spoofing using lightweight on-device AI.',
                'Background processing, local persistence and sync for low-connectivity use.'
            ],
            tech: ['Android', 'Geofencing', 'On-device AI', 'Anti-spoofing'],
            icon: 'fa-bus',
            link: 'https://play.google.com/store/apps/details?id=com.vcommute.traveltracking&hl=en'
        },
        {
            title: 'V-Fleet, V-Asset & iCan',
            subtitle: 'Enterprise Android suite',
            description: [
                'Production Android apps for fleet management, asset tracking and accessibility.',
                'Offline-first architectures with secure authentication, local persistence and sync.',
                'QR/barcode scanning, location tracking, speech-to-text and text-to-speech.'
            ],
            tech: ['Kotlin', 'Jetpack Compose', 'Offline-first', 'MVVM'],
            icon: 'fa-truck',
            link: 'https://play.google.com/store/apps/details?id=com.vareli.fleet&hl=en'
        },
        {
            title: 'Few-Shot Fraud Detection',
            subtitle: 'M.Tech thesis · Jadavpur University (ongoing)',
            description: [
                'Few-shot learning framework to detect fraud on new credit card accounts with little transaction history.',
                'Combines population-level behavioural priors with prototype-based embeddings.',
                'Evaluated on IEEE-CIS with simulated cold-start scenarios, using AUC-PR for imbalanced data.'
            ],
            tech: ['Few-shot Learning', 'PyTorch', 'Embeddings', 'AUC-PR'],
            icon: 'fa-flask'
        }
    ];

    openLink(url?: string) {
        if (url) window.open(url, '_blank', 'noopener');
    }
}
