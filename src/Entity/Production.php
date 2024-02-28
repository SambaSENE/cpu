<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Get;
use App\Repository\ProductionRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: ProductionRepository::class)]
#[ApiResource (
    operations: [
        new GetCollection(uriTemplate: '/cpu_productions'),
        new Get(uriTemplate: '/cpu_productions/{ id }')
    ]
)]
class Production
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 50)]
    private ?string $nom = null;

    #[ORM\Column(length: 255)]
    private ?string $description = null;

    #[ORM\Column]
    private ?int $duree = null;

    #[ORM\ManyToOne]
    private ?Microprocesseur $idCpu = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getDuree(): ?int
    {
        return $this->duree;
    }

    public function setDuree(int $duree): static
    {
        $this->duree = $duree;

        return $this;
    }

    public function getIdCpu(): ?Microprocesseur
    {
        return $this->idCpu;
    }

    public function setIdCpu(?Microprocesseur $idCpu): static
    {
        $this->idCpu = $idCpu;

        return $this;
    }
}
