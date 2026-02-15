import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Capability {
    category: string;
    skills: string[];
}

@Component({
    selector: 'app-skills',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.css']
})
export class SkillsComponent implements AfterViewInit {

    capabilities: Capability[] = [
        { category: 'Android Engineering', skills: ['Android SDK, Jetpack Compose', 'MVVM, RESTful APIs', 'SQLite, Firebase', 'Multithreading, Camera Pipelines'] },
        { category: 'Computer Vision & ML', skills: ['OpenCV, ML Kit, TrackNet', 'InsightFace, DeepFace', 'CNN-based Object Detection', 'LSTM, Transformer Architectures'] },
        { category: 'Training & Optimization', skills: ['PyTorch, TensorFlow Lite', 'ONNX, CoreML', 'Quantization, Edge Deployment', 'Dataset Engineering'] },
        { category: 'Processing & Tools', skills: ['GStreamer, RTSP, FFmpeg', 'GPU Inference', 'Git, Google Cloud Console', 'Performance Tuning'] }
    ];

    ngAfterViewInit() {
        gsap.from(".skill-block", {
            scrollTrigger: {
                trigger: ".proof-section",
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            duration: 0.8,
            y: 30,
            opacity: 0,
            stagger: 0.1,
            ease: "power2.out"
        });
    }
}
