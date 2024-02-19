<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\MicroprocesseurRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: MicroprocesseurRepository::class)]
#[ApiResource]
class Microprocesseur
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 5)]
    private ?string $marque = null;

    #[ORM\Column(length: 8)]
    private ?string $famille = null;

    #[ORM\Column(length: 7)]
    private ?string $model = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 1, scale: 1)]
    private ?string $frequence = null;

    #[ORM\Column(type: Types::DECIMAL, precision: 3, scale: 0)]
    private ?string $prix = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getMarque(): ?string
    {
        return $this->marque;
    }

    public function setMarque(string $marque): static
    {
        $this->marque = $marque;

        return $this;
    }

    public function getFamille(): ?string
    {
        return $this->famille;
    }

    public function setFamille(string $famille): static
    {
        $this->famille = $famille;

        return $this;
    }

    public function getModel(): ?string
    {
        return $this->model;
    }

    public function setModel(string $model): static
    {
        $this->model = $model;

        return $this;
    }

    public function getFrequence(): ?string
    {
        return $this->frequence;
    }

    public function setFrequence(string $frequence): static
    {
        $this->frequence = $frequence;

        return $this;
    }

    public function getPrix(): ?string
    {
        return $this->prix;
    }

    public function setPrix(string $prix): static
    {
        $this->prix = $prix;

        return $this;
    }
}
